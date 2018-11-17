class WizardTabControl {
    constructor(innerText) {
        let text = document.createTextNode(innerText);
        this.node = document.createElement('button');
        this.node.appendChild(text);
        this.isHidden = true;
    }

    disable() {
        this.node.disabled = true;
    }

    enable() {
        this.node.disabled = false;
    }

    hide() {
        this.node.hidden = true;
    }

    show() {
        this.node.hidden = false;
    }
}