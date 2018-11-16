class WizardTabControl {
    constructor(innerText) {
        let text = document.createTextNode(innerText);
        this.node = document.createElement('button');
        this.node.appendChild(text);
        this.isHidden = true;
        this.node.addEventListener('click', (e) => console.log(e));
    }

    disable() {
        this.node.disabled = true;
    }

    hide() {
        this.node.hidden = true;
    }
}