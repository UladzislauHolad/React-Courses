class BrandsService {
    constructor() {
        this.checked = undefined;
    }

    getData() {
        let data = {
            title: 'Выберите марку',
            radios: true,
            checked: this.checked,
            name: 'brand',
            values:[
                { value: 'Ford' },
                { value: 'BMW' },
                { value: 'Audi' }
            ]
        }

        return data;
    }
}