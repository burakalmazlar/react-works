const person = {
    name: 'Max'
};

const secondPerson = person;

const thirdPerson = {...person};

person.name = 'Manu';

console.log(person)
console.log(secondPerson)
console.log(thirdPerson)
