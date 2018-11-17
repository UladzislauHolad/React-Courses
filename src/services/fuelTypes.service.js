class FuelTypesService {
    constructor() {
        this.checked = undefined;
    }

    getData() {
        let data = {
            title: 'Выберите тип топлива',
            radios: true,
            checked: this.checked,
            name: 'fuel',
            values: [
                { value: 'бензин' },
                { value: 'дизель' }
            ]
        }

        return data;
    }
}