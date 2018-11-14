class WizardNode {
    constructor(tag, id, classname) {
        this.mainNode = document.createElement(tag);
        this.mainNode.setAttribute('id', id);
        this.mainNode.setAttribute('class', classname);
    }
}