class WizardTab extends WizardNode {
    constructor(tag, classname, checkedCallback) {
        super(tag, classname);
        this.checkedCallback = checkedCallback;
    }

    init(data) {
        this.clear();
        this.addTitle(data.title);
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

    addTitle(titleText) {
        let title = document.createElement('h1');
        title.append(document.createTextNode(titleText));
        this.mainNode.appendChild(title);
    }

    createList(values) {
        let list = document.createElement('ul');
        for(var prop in values) {
            let listItem = this.createListItem(prop, values[prop]);
            list.appendChild(listItem);
        }
        this.mainNode.appendChild(list);
    }

    createListItem(categoryText, valueText) {
        let listItem = document.createElement('li');
        let category = document.createElement('strong');
        category.appendChild(document.createTextNode(`${categoryText.toUpperCase()}: `))
        listItem.appendChild(category);
        listItem.appendChild(document.createTextNode(valueText));
        return listItem;
    }

    createRadioInputs(data) {
        data.values.forEach((item) => {
            let input = new WizardRadioInput(data.name, item.value, this.checkedCallback, data.checked);
            this.mainNode.appendChild(input.node);
        });
    }
}