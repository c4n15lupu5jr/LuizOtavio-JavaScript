const numeros = [10,20,30,50,2,5,6,4,7,11]
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)
console.log(numerosPares)