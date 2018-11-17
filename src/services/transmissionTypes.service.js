class TransmissionTypesService {
    constructor() {
        this.checked = undefined;
    }

    getData() {
        let data = {
            title: 'Выберите вид трансмиссии',
            radios: true,
            checked: this.checked,
            name: 'transmission',
            values: [
                { value: 'АКП' },
                { value: 'МКП' }
            ]
        }

        return data;
    }
}