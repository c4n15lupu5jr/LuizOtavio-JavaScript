class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }
}

const controle1 = new ControleRemoto('LG')
console.log(controle1)