const nome = 'Renan Abal'
const sobrenome = 'Lobo'
const idade = 14
const peso = 34
const alturaEmM = 1.85
let imc
let anoNascimento

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)