const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const products = document.getElementById('productos')
const inpNombres = document.getElementById('inpNombres')
const inpApellidos = document.getElementById('inpApellidos')
const botonAgregaApe = document.getElementById('botonAgregaApe')
const botonProductos = document.getElementById('botonProductos')
const arrayProductos = [{
    producto: "Guitarra",
    precio: 150
}, 
{
    producto: "Saxo",
    precio: 50
},
{
    producto: "Piano",
    precio: 600    
}]


inpNombres.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13){
        botonAgrega.click()
    }
})

botonAgrega.addEventListener("click",() => {
    let nuevoNombre = inpNombres.value
    const nuevoLi = document.createElement('li')
    nuevoLi.innerHTML = nuevoNombre
    nombres.appendChild(nuevoLi)
})

inpApellidos.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13){
        botonAgregaApe.click()
    }
})

botonAgregaApe.addEventListener('click', () => {
    let nuevoApellido = inpApellidos.value
    const nuevoLi = document.createElement('li')
    nuevoLi.innerHTML = nuevoApellido
    apellidos.appendChild(nuevoLi)
})

botonProductos.addEventListener("click",() => {
    arrayProductos.forEach((producto, i) => {
        let nuevoProducto = document.createElement('li')
        let nuevoPrecio = document.createElement('li')
        nuevoProducto.innerHTML = producto.producto
        nuevoPrecio.innerHTML = producto.precio
        products.appendChild(nuevoProducto)
        products.appendChild(nuevoPrecio) 
    })
})


    