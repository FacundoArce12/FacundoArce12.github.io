botonDark = document.querySelector("#botonDark")
audio_fondo = document.querySelector("#BocaSong")
botonMusica = document.querySelector("#botonMusica")
Titulo=  document.querySelector("#Título")


botonMusica.addEventListener("click", () => {
    if (audio_fondo.paused){
        audio_fondo.load()
        audio_fondo.play()
    }else{
        audio_fondo.pause()
    }
    botonMusica.classList.toggle("btn-light")
   
})

var imagenes = ["img/GuercinoBostero.jpg", "img/Guercino.jpg",];
var indiceImagen = 0;
function cambiarImagen4() {
    // Obtener el elemento de la imagen por su ID
    var miImagen = document.getElementById("miImagen");

    // Cambiar la fuente de la imagen
    miImagen.src = imagenes[indiceImagen];

    // Incrementar el índice (circularmente)
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}
