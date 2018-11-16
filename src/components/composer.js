class Composer {
    compose(destinationElement) {
        let wizardContainer = 
            new WizardContainer('div', 'container', new BrandsService());
        destinationElement.appendChild(wizardContainer.mainNode);

        // wizardContainer.init(function(e) {
        //     console.log(e);
        // });
        wizardContainer.showCurrentTab();
        // debugger
        // wizardContainer.nextTab();
        // debugger
        // wizardContainer.showCurrentTab();
    }
}