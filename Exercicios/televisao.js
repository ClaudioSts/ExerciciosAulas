class Televisao {
    #volume
    #canal

    constructor() {
        this.#volume = 50
        this.#canal = 1
    }

    aumentarVolume() {
        if (this.#volume == 100) {
            return this.#volume
        } else {
            this.#volume += 1
        }
        return this
    }

    diminuirVolume() {
        if (this.#volume == 0) {
            return this.#volume
        } else {
            this.#volume -= 1
        }
        return this
    }

    mudarCanal(num) {
        if (num < 1 || num > 30) {
            return this.#canal
        } else {
            this.#canal = num
        }
        return this
    }
}