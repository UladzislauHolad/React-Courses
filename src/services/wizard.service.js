class WizardService {

    static getData(criteria) {
        this.data

        if(criteria) {
            return this.data.filter(item => item.criteria === criteria);
        }

        return this.data;
    }
}