class WizardContainer extends WizardNode {
    constructor(tag, classname, nextCallback, prevCallback, inputCallback) {
        super(tag, classname);
        this.tab = new WizardTab('div', 'tab', inputCallback);

        this.tabContainer = this.addContainer('tab-container');
        this.tabContainer.appendChild(this.tab.mainNode);
        
        this.ctrlContainer = this.addContainer('btn-container');
        
        this.prevBtn = this.addControl('prev-btn', 'Prev', prevCallback);
        this.nextBtn = this.addControl('next-btn', 'Next', nextCallback);   
    }

    showTab(data) {
        this.tab.init(data);
    }

    changeControlState(controlState) {
        this.nextBtn.node.disabled = controlState.isNextDisabled;
        this.nextBtn.node.hidden = controlState.isNextHidden;
        
        this.prevBtn.node.hidden = controlState.isPrevHidden;
    }

    addContainer(id) {
        let container = document.createElement('div');
        container.setAttribute('id', id);
        this.mainNode.appendChild(container);
        return container;
    }

    addControl(id, innerText, callback) {
        let control = new WizardTabControl(innerText);
        control.node.setAttribute('id', id);
        control.node.addEventListener('click', callback)
        this.ctrlContainer.appendChild(control.node);
        return control;
    }
}