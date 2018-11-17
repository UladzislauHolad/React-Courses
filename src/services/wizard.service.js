class WizardService {
    constructor(destinationElement) {
        this.initStates()
        this.result = {};
        this.state = 'brand';
        
        this.states = [];
        this.states['brand'] = new BrandsService();
        this.states['model'] = new ModelsService(this.states['brand']);
        this.states['transmission'] = new TransmissionTypesService();
        this.states['fuel'] = new FuelTypesService();
        this.states['summary'] = new SummaryService();
        
        this.wizard = new WizardContainer(
            'div',
            'container',
            (e) => this.nextState.call(this, e),
            (e) => this.prevState.call(this, e),
            (e) => this.changeResult.call(this, e));
        destinationElement.appendChild(this.wizard.mainNode);
        
        this.wizard.showTab(this.getData());
    }

    nextState() {
        this.state = this.nextStates[this.state] ? this.nextStates[this.state] : 'summary';
        this.wizard.showTab(this.getData());
    }

    prevState() {
        this.state = this.prevStates[this.state] ? this.prevStates[this.state] : 'brand';
        
        this.wizard.showTab(this.getData());
    }

    getData() {
        let data = this.states[this.state].getData()
        this.changeControlState();
        return data;
    }

    changeControlState() {
        let isNextHidden = !this.nextStates[this.state] ? true : false;
        let isPrevHidden = !this.prevStates[this.state] ? true : false;
        let isNextDisabled = !this.states[this.state].checked ? true : false;

        let controlState = {
            isNextHidden,
            isNextDisabled,
            isPrevHidden
        }

        this.wizard.changeControlState(controlState);
    }

    changeResult(e) {
        this.states[this.state].checked = e.target.value;
        this.states['summary'].data.values[this.state] = e.target.value;
        this.changeControlState();
    }

    initStates() {
        this.nextStates = {
            'brand': 'model',
            'model': 'transmission',
            'transmission': 'fuel',
            'fuel': 'summary'
        }

        this.prevStates = {
            'brand': undefined,
            'model': 'brand',
            'transmission': 'model',
            'fuel': 'transmission',
            'summary': 'fuel'
        }
    }
}