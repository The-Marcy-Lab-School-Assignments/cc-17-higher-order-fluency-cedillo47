//write your code here

const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
const pluralize = array => {
    return array.map(animal => `${animal}s`)
};

const uppercase = array => {
    return array.map(animal => `${animal[0].toUpperCase()}${animal.slice(1)}`)
}

const longWords = array => {
    return array.filter(animal => 3 < animal.length )
}

const shortWords = array => {
    return array.filter(animal => animal.length < 5)
}

const oddLength = array => {
    return array.filter(animal => animal.length % 2 !== 0)
}

const longToShort = array => {
    return array.sort((a, b) => b.length - a.length)
}
// console.log(longToShort(animals))

const number = array =>{
    return array.reduce((previus,current) => previus + current)
}

    const numbers = [22, 15, 1114, 416, 37, 4]

console.log(longToShort(animals))