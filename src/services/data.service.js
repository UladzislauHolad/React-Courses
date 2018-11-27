const data = [
    {
        value: 50,
        label: 'Mon'
    },
    {
        value: 10,
        label: 'Tue'
    },
    {
        value: 23,
        label: 'Wed'
    },
    {
        value: 53,
        label: 'Thu'
    },
    {
        value: 32,
        label: 'Fri'
    },
    {
        value: 98,
        label: 'Sat'    
    },
    {
        value: 11,
        label: 'Sun'
    }
]

function getData() {
    return Promise.resolve(data);
}

export default getData;