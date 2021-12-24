const oldArray = [3,2,1]

let newArray = [...oldArray,5,4]

console.log(newArray)

const oldObject = {oldProp: 'old'}

const newObject = {...oldObject, newProp: 'new'}

console.log(JSON.stringify(newObject))

function sortArgs(...args) {
    return args.sort();
}

console.log(sortArgs(3,2,1))

const filter = (...args) => {
    return args.filter(e => e === 1)
}

console.log(filter(3,2,1))