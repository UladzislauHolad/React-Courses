class WizardRadioInput {
    constructor(name, value, checkedCallback) {
        let p = document.createElement('p');

        // let label = document.createElement('label');
        // label.setAttribute('for', name);
        
        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', name);
        input.setAttribute('value', value);
        input.onchange = checkedCallback;
        p.appendChild(input);

        let text = document.createTextNode(value);
        p.appendChild(text);

        this.node = p;
    }    
}