class WizardTab extends WizardNode {
    constructor(tag, classname, checkedCallback) {
        super(tag, classname);
        this.checkedCallback = checkedCallback;
    }

    init(data) {
        this.clear();
        if(data.radios) {
            this.createRadioInputs(data);
        }
        if(data.list) {
            this.createList(data.values);
        }
    }

    clear() {
        while (this.mainNode.firstChild) {
            this.mainNode.removeChild(this.mainNode.firstChild);
        }
    }

    createList(values) {
        let list = document.createElement('ul');
        for(var prop in values) {
            let listItem = document.createElement('li');
            let category = document.createElement('strong');
            let categoryText = document.createTextNode(`${prop.toUpperCase()}: `);
            let valueText = document.createTextNode(values[prop]);
            category.appendChild(categoryText);
            listItem.appendChild(category);
            listItem.appendChild(valueText);
            list.appendChild(listItem);
        }
        this.mainNode.appendChild(list);
    }

    createRadioInputs(data) {
        data.values.forEach((item) => {
            let input = new WizardRadioInput(data.name, item.value, this.checkedCallback, data.checked);
            this.mainNode.appendChild(input.node);
        });
    }
}