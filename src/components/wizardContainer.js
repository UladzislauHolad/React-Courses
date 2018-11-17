class WizardContainer extends WizardNode {
    constructor(tag, classname, ...services) {
        super(tag, classname);
        this.tabs = [];
        this.currentTabIndex = 0;
        this.services = services;
        this.init((e) => console.dir(e));
        this.tabContainer = this.addContainer('tab-container');
        this.ctrlContainer = this.addContainer('btn-container');
        this.prevBtn = this.addControl('prev-btn', 'Prev', () => this.prevTab.call(this));
        this.nextBtn = this.addControl('next-btn', 'Next', () => this.nextTab.call(this));   
    }

    init(checkedCallback) {
        // debugger
        this.services.forEach((service) => {
            let tab = new WizardTab('div', 'tab', service);
            this.tabs.push(tab);
            tab.init(service.getData(), checkedCallback);
        });
    }

    showCurrentTab() {
        let currentTab = this.tabs[this.currentTabIndex];
        this.tabContainer.appendChild(currentTab.mainNode);
        this.checkControlsState();
    }

    nextTab() {
        console.log(this);
        // debugger
        let lastTabIndex = this.tabs.length - 1;
        let currentTab = this.tabs[this.currentTabIndex];
        if(this.currentTabIndex < lastTabIndex) {
            currentTab.destroyDOM();
            this.currentTabIndex++;
            this.showCurrentTab();
        }
    }

    prevTab() {
        let firstTabIndex = 0;
        let currentTab = this.tabs[this.currentTabIndex];

        if(this.currentTabIndex > firstTabIndex) {
            currentTab.destroyDOM();
            this.currentTabIndex--;
            this.showCurrentTab();
        }
    }

    checkControlsState() {
        // debugger
        let firstTabIndex = 0;
        let lastTabIndex = this.tabs.length - 1;

        if(this.currentTabIndex === firstTabIndex) {
            this.prevBtn.hide();
            this.nextBtn.show();
        }

        if(this.currentTabIndex === lastTabIndex) {
            this.prevBtn.show();
            this.nextBtn.hide();
        }

        if(this.currentTabIndex > firstTabIndex && this.currentTabIndex < lastTabIndex) {
            this.prevBtn.show();
            this.nextBtn.show();
        }
    }

    generateSummary() {
        
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
        control.hide();
        this.ctrlContainer.appendChild(control.node);
        return control;
    }
}