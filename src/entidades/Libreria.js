class Libreria {
    constructor(cache) {
        this.archivo = cache ? cache : [],
            this.agregarLibro = (libro) => {
                this.archivo.push(libro)
            }
    }
}

export default Libreria