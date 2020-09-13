function mostrarLibro(libro, callbackfunction = () => { }) {
    const $contenedorLibros = document.querySelector("#contenedor-libros")
    const $contenedor = document.createElement("div")
    $contenedor.className = "libro"
    $contenedor.dataset.libro = libro.title
    const $title = document.createElement("h3")
    $title.innerText = `Titulo: ${libro.title}`
    const $author = document.createElement("h3")
    $author.innerText = `Autor: ${libro.author}`
    const $pages = document.createElement("h3")
    $pages.innerText = `Paginas: ${libro.pages}`
    const $read = document.createElement("h3")
    $read.innerText = `Leido : ${libro.read ? "si" : "no"}`
    const $button = document.createElement("button")
    $button.innerText = "Eliminar"
    debugger
    $button.onclick = function () {
        callbackfunction(libro.title)
    }
    $contenedor.appendChild($title)
    $contenedor.appendChild($author)
    $contenedor.appendChild($pages)
    $contenedor.appendChild($read)
    $contenedor.appendChild($button)
    $contenedorLibros.appendChild($contenedor)
}

export default mostrarLibro