function mostrarLibro(libro, callbackfunction = () => { }) {
    debugger
    const $contenedorLibros = document.querySelector("#contenedor-libros")
    const $contenedor = document.createElement("div")
    $contenedor.className = "libro"
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
    $button.onclick = callbackfunction
    $contenedor.appendChild($title)
    $contenedor.appendChild($author)
    $contenedor.appendChild($pages)
    $contenedor.appendChild($read)
    $contenedor.appendChild($button)
    $contenedorLibros.appendChild($contenedor)
}

export default mostrarLibro