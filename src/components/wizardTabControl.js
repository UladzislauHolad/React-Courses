class WizardTabControl {
    constructor(innerText) {
        let text = document.createTextNode(innerText);
        this.node = document.createElement('button');
        this.node.appendChild(text);
        this.isHidden = true;
    }
}