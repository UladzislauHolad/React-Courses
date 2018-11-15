class ModelsService {
    getData(brand) {
        let name = 'model';
        let data = [
            { name: name, value: 'Ka', brand: 'Ford' },
            { name: name, value: 'Focus', brand: 'Ford' },
            { name: name, value: 'Fiesta', brand: 'Ford' },
            { name: name, value: 'TT', brand: 'Audi' },
            { name: name, value: 'A5', brand: 'Audi' },
            { name: name, value: 'Q7', brand: 'Audi' },
            { name: name, value: 'X5', brand: 'BMW' },
            { name: name, value: 'M5', brand: 'BMW' },
            { name: name, value: 'i8', brand: 'BMW' },
        ];
        if(brand) {
            return data.filter(item => item.brand === brand);
        }

        return data;
    }
}