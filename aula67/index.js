const numeros = [50,20,30,10,5,3,,7,8,11,2]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
}, 0)
console.log(total)