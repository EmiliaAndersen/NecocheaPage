const panels = document.querySelectorAll('.panel') /*SELECCIONA TODOS LOS PANELES*/

panels.forEach(panel => {
    panel.addEventListener('click', () => { /*AGREGA EVENTO DE CLICK*/
        removeActiveClasses() /*LLAMA A LA FUNCION*/
        panel.classList.add('active') /*AGREGA ACTIVE AL QUE HICE CLICK*/
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active') /*ELIMINA LA CLASE ACTIVE DE TODOS*/
    })
}
