// Mi listado de productos
const productos = [
    {
        id: 0,
        titulo: 'Zapatillas Nike',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_836874-MLA41151496936_032020-O.webp',
        talles: [32, 33, 35, 37],
        descripcion: 'Zapatillas Nike Deportivas',
        precio: 7000
    },
    {
        id: 1,
        titulo: 'Zapatillas Adidas',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_660214-MLA45972054962_052021-O.webp',
        talles: [30, 36, 40, 41],
        descripcion: 'Zapatillas Adidas Deportivas',
        precio: 8000
    },
    {
        id: 2,
        titulo: 'Zapatillas Puma',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_757508-MLA45510240698_042021-O.webp',
        talles: [40, 41, 42, 43],
        descripcion: 'Zapatillas Puma Deportivas',
        precio: 6000
    }
]

// Elementos del carrito
const btnCarrito = document.getElementById('btncarrito')
const divCarrito = document.getElementById('carrito')
let carrito = []

// Cargar carrito en el DOM
function cargarCarrito(){
    divCarrito.innerHTML = ''
    if(carrito.length > 0){
        let tabla = document.createElement('table')
        tabla.classList.add('table')
        let thead = document.createElement('thead')
        thead.innerHTML = `
                  <thead>
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                    </tr>
                  </thead>
    `
        tabla.appendChild(thead)

        let tbody = document.createElement('tbody')

        carrito.forEach( prod => {
            let tr = document.createElement('tr')

            let prodTit = document.createElement('th')
            prodTit.textContent = prod.titulo
            tr.appendChild(prodTit)

            let prodCant = document.createElement('th')
            prodCant.textContent = 'x' + prod.cantidad
            tr.appendChild(prodCant)

            let prodPrec = document.createElement('th')
            prodPrec.textContent = '$' + (prod.precio * prod.cantidad)
            tr.appendChild(prodPrec)

            tbody.appendChild(tr)
        })

        tabla.appendChild(tbody)
        divCarrito.appendChild(tabla)
    }else{
        let p = document.createElement('p')
        p.innerText = 'El carrito esta vacio'
        p.classList.add('lead')
        p.classList.add('p-2')
        divCarrito.appendChild(p)
    }
}

// Ver u ocultar carrito
function verCarrito(){
    cargarCarrito()
    divCarrito.classList.toggle("d-none");
}

function agregarCarrito(prod){
    console.log("Se agrego al carrito el producto con ID: " + prod.cantidad)
    carrito.push(prod)
    cargarCarrito()
}

const listaProductos = document.getElementById('productos')

productos.forEach(prod => {
    let card = document.createElement('div')
    card.classList.add('col')
    card.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.titulo}">
            <div class="card-body">
                <h5 class="card-title"><b>${prod.titulo} - $${prod.precio}</b></h5>
                <p class="card-text">${prod.descripcion}</p>
                <p class="card-text">Cantidad: <input class="w-25" type="number" value="1" min="1" id="cant-${prod.id}" /></p>
                <p class="card-text"><b id="esp-${prod.id}"></b></p>
                <p class="card-text"><a id="prod-${prod.id}" class="btn btn-danger">Comprar</a></p>
            </div>
        </div>
    `
    listaProductos.appendChild(card)

    let boton = document.getElementById('prod-' + prod.id)
    let cantidad = document.getElementById('cant-' + prod.id)
    let espejo = document.getElementById('esp-' + prod.id)

    boton.addEventListener("click", () => {
        prod.cantidad = parseInt(cantidad.value)
        agregarCarrito(prod)
    })
    cantidad.addEventListener('change', () => {
        if(isNaN(cantidad.value)){
            espejo.textContent = 'Ingrese un numero valido'
        }else{
            espejo.textContent = ''
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