class WizardTab extends WizardNode {
    constructor(tag, classname, service) {
        super(tag, classname);
        this.service = service;
        this.inputs = [];
    }

    init(data, checkedCallback) {
        data.forEach((item) => {
            let input = new WizardRadioInput(item.name, item.value, checkedCallback);
            this.inputs.push(input);
            this.mainNode.appendChild(input.node);
        });
    }
}