class Composer {
    compose(destinationElement) {
        let services = [
            new BrandsService(),
            new ModelsService(),
            new TransmissionTypesService(),
            new FuelTypesService()
        ];
        let wizardContainer = 
            new WizardContainer('div', 'container', ...services);
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