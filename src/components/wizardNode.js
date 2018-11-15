class WizardNode {
    constructor(tag, classname) {
        this.mainNode = document.createElement(tag);
        this.mainNode.setAttribute('class', classname);
    }

    appendNode(node) {
        this.mainNode.appendChild(node);
    }

    destroyDOM() {
        this.mainNode.remove();
    }
}