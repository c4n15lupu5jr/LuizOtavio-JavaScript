function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80)
console.log(p1.nome)
console.log(p1.sobrenome)
p1.imc = 29
console.log(p1.imc)

