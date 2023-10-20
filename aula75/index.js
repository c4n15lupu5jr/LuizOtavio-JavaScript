const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)