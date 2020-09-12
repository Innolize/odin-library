

class Libro {
    constructor(author, title, pages, read) {
        this.author = author,
            this.title = title,
            this.pages = pages,
            this.read = read
    }
}

class Libreria {
    constructor() {
        this.archivo = [],
            this.agregarLibro = (libro) => {
                this.archivo.push(libro)
            }
    }
}

function clickearCrearLibro(funcionCallback) {
    const botonCrearLibro = document.querySelector("#crear-libro")
    botonCrearLibro.addEventListener("click", funcionCallback)
}

function crearLibro() {
    const author = document.querySelector("#input-author").value
    const title = document.querySelector("#input-title").value
    const pages = document.querySelector("#input-pages").value
    const read = document.querySelector("#input-read").value

    const nuevoLibro = new Libro(author, title, pages, read)
    miLibreria.archivo.push(nuevoLibro)
    console.log(miLibreria)
}

clickearCrearLibro(crearLibro)

const miLibreria = new Libreria()

console.log(miLibreria)