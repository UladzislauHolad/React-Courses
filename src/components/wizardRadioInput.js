class WizardRadioInput {
    constructor(name, value, checkedCallback, checked) {
        let p = document.createElement('p');
        let id = `${name}-${value}`;

        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', name);
        input.setAttribute('value', value);
        input.setAttribute('id', id);
        input.checked = checked === value;
        input.addEventListener('change', checkedCallback)
        p.appendChild(input);

        let label = document.createElement('label');
        let labelText = document.createTextNode(value);
        label.setAttribute('for', id);
        label.appendChild(labelText);
       
        p.appendChild(label);

        this.node = p;
    }    
}