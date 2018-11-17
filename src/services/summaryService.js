class SummaryService {
    constructor() {
        this.data = {
            list: true,
            title: 'Итого',
            values: []
        }
    }

    getData() {
        return this.data;
    }
}