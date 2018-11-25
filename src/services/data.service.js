const data = [
    {
        x: 10,
        y: 5
    },
    {
        x: 40,
        y: 20
    },
    {
        x: 80,
        y: 50
    },
    {
        x: 120,
        y: 20
    },
    {
        x: 160,
        y: 10
    },
    {
        x: 200,
        y: 30
    },
]

function getData() {
    return Promise.resolve(data);
}

export default getData;