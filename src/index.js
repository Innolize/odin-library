import mostrarLibro from './ui.js'

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

const miLibreria = new Libreria()

function clickearCrearLibro(funcionCallback) {
    const botonCrearLibro = document.querySelector("#crear-libro")
    botonCrearLibro.addEventListener("click", funcionCallback)

}

function manejadorCrearLibro() {
    const libro = crearLibro()
    mostrarLibro(libro, eliminarLibro)
    limpiaInputs()
}

clickearCrearLibro(manejadorCrearLibro)

function crearLibro() {
    const author = document.querySelector("#input-author").value
    const title = document.querySelector("#input-title").value
    const pages = document.querySelector("#input-pages").value
    const read = document.querySelector("#input-read").checked

    const nuevoLibro = new Libro(author, title, pages, read)
    miLibreria.archivo.push(nuevoLibro)

    return nuevoLibro
}

function eliminarLibro(dataset) {
    const libroAEliminar = document.querySelector(`[data-libro=${dataset}]`)
    libroAEliminar.remove()
}

function limpiaInputs() {
    const author = document.querySelector("#input-author").value = ""
    const title = document.querySelector("#input-title").value = ""
    const pages = document.querySelector("#input-pages").value = ""
    const read = document.querySelector("#input-read").checked = false
}