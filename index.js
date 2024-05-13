// Task 1
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}


// Task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => {
        return person.friendly
    })
}


// Task 3
const doMathSum = (a, b) => a + b


const produceProduct = (a, b) => a * b


// Task 4
const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`


// Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
    ];

    function filterForDogs(arr) {
        return arr.filter(animal => animal.type === 'dog' ? true : false)     
    }

    