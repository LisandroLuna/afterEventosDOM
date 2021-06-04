let productos = [
    {
        id: 0,
        titulo: 'Zapatillas Nike',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_836874-MLA41151496936_032020-O.webp',
        talles: [32, 33, 35, 37],
        descripcion: 'Zapatillas Nike Deportivas'
    },
    {
        id: 1,
        titulo: 'Zapatillas Adidas',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_660214-MLA45972054962_052021-O.webp',
        talles: [30, 36, 40, 41],
        descripcion: 'Zapatillas Adidas Deportivas'
    },
    {
        id: 2,
        titulo: 'Zapatillas Puma',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_757508-MLA45510240698_042021-O.webp',
        talles: [40, 41, 42, 43],
        descripcion: 'Zapatillas Puma Deportivas'
    }
]

let carrito = []

function verCarrito(){
    console.log(carrito)
}

function agregarCarrito(prod){
    console.log("Se agrego al carrito el producto con ID: " + prod.id)
    carrito.push(prod)
}

const listaProductos = document.getElementById('productos')

productos.forEach(prod => {
    let card = document.createElement('div')
    card.classList.add('col')
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.titulo}">
            <div class="card-body">
                <h5 class="card-title">${prod.titulo}</h5>
                <p class="card-text">${prod.descripcion}</p>
                <p>Cantidad:</p><input value="1" min="1" id="cant-${prod.id}" />
                <p><b id="esp-${prod.id}"></b></p>
                <a id="prod-${prod.id}" class="btn btn-danger">Comprar</a>
            </div>
        </div>
    `
    listaProductos.appendChild(card)

    let boton = document.getElementById('prod-' + prod.id)
    let cantidad = document.getElementById('cant-' + prod.id)
    let espejo = document.getElementById('esp-' + prod.id)

    boton.addEventListener("click", () => {
        prod.cantidad = cantidad.value
        agregarCarrito(prod)
    })
    cantidad.addEventListener('keyup', () => {
       console.log( typeof cantidad.value)
        if(isNaN(cantidad.value)){
            espejo.textContent = 'Ingrese un numero valido'
        }else{
            espejo.textContent = 'Es un numero'
        }

    })
})

const form = document.getElementById('form')
const input = document.getElementById('input')
const mens = document.getElementById('mensaje')
const enviar = document.getElementById('enviar')

enviar.addEventListener("click", ()=>{
    if(input.value.length == 0){
        mens.textContent = 'Ingrese algun valor'
    }else{
        form.submit()
    }
})