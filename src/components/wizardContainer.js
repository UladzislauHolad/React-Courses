class WizardContainer extends WizardNode {
    constructor(tag, classname, ...services) {
        super(tag, classname);
        this.tabs = [];
        this.currentTabIndex = 0;
        this.services = services;
    }

    init(checkedCallback) {
        this.services.forEach((service) => {
            let tab = new WizardTab('div', 'tab', service);
            this.tabs.push(tab);
            tab.init(service.getData(), checkedCallback);
        });
    }

    showCurrentTab() {
        let currentTab = this.tabs[this.currentTabIndex];
        this.mainNode.appendChild(currentTab.mainNode);
    }

    nextTab() {
        let currentTab = this.tabs[this.currentTabIndex];
        currentTab.destroyDOM();
        this.currentTabIndex++;
    }

    generateSummary() {

    }
}