class ModelsService {
    constructor(brandsService) {
        this.brand = brandsService;
        this.checked = undefined;
    }

    getData() {
        let data = {
            title: "Выберите модель",
            radios: true,
            checked: this.checked,
            name: 'model',
            values: [
                { value: 'Ka', brand: 'Ford' },
                { value: 'Focus', brand: 'Ford' },
                { value: 'Fiesta', brand: 'Ford' },
                { value: 'TT', brand: 'Audi' },
                { value: 'A5', brand: 'Audi' },
                { value: 'Q7', brand: 'Audi' },
                { value: 'X5', brand: 'BMW' },
                { value: 'M5', brand: 'BMW' },
                { value: 'i8', brand: 'BMW' },
            ]
        };

        data.values = data.values.filter(item => item.brand === this.brand.checked);

        let isStillChecked = data.values.some((item) => item.value === this.checked);
        
        if(!isStillChecked) {
            this.checked = undefined;
            data.checked = undefined;
        }

        return data;
    }
}