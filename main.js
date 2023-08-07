const menuIcon = document.getElementById('icon-menu')
const cartIcon = document.getElementById('icon-cart')
const btnCart = document.getElementById('btn-cart')

const menos = document.getElementById('menos')
const mais = document.getElementById('mais')
const total = document.getElementById('total')

const menu = document.getElementById('menu')
const fecha = document.getElementById('close')
const cart = document.getElementById('cart')

let quantidade = 1

atualizaTotal()
acionaMenu()
criaCarrinho()

function criaCarrinho() {
    cart.innerHTML = `
        <div id="cart-class" class="hidden bg-white absolute w-4/5 m-6 h-60 z-40 rounded-xl shadow-2xl">
          <h3 class="font-bold ml-6 my-4">Cart</h3>
          <div class="flex justify-center">
          <h4 class="font-bold mt-16 text-darkgblue">Your cart is empty.</h4>
          </div>
          </div>
        `

    atualizaCliqueCarrinho()
}

function acionaMenu() {
    menuIcon.addEventListener('click', () => {
        menu.classList.remove('-left-full')
    })

    fecha.addEventListener('click', () => {
        menu.classList.add('-left-full')
    })
}

function atualizaTotal() {
    total.innerText = quantidade

    mais.addEventListener('click', () => {
        if (quantidade >= 8) {
            quantidade = 8
        } else {
            quantidade++
            total.innerText = quantidade

        }
    })

    menos.addEventListener('click', () => {
        if (quantidade <= 0) {
            quantidade = 0
        } else {
            quantidade--
            total.innerText = quantidade
        }
    })
}

btnCart.addEventListener('click', () => {
    adicionaAoCarrinho()
})

function adicionaAoCarrinho() {
    totalPrice = quantidade * 125

    cart.innerHTML = `
    <div id="cart-class" class="bg-white absolute w-4/5 m-6 h-60 z-40 rounded-xl shadow-2xl">
          <h3 class="font-bold ml-6 my-4">Cart</h3>
          <div class="flex justify-center gap-3 mt-10">
            <img class="w-10 rounded" src="images/image-product-1-thumbnail.jpg" alt="">
            <div class="text-sm">
              <p class="text-darkgblue font-semibold">Fall Limited Edition Sneakers</p>
              <p class="text-darkgblue">$125.00 x ${quantidade} <span class="font-bold text-black">$${totalPrice}.00</span></p>
            </div>
            <img id="delete" class="self-center" src="images/icon-delete.svg" alt="trash">
          </div>
          <div class="flex justify-center">
            <button class="bg-corange text-white font-semibold w-full mx-6
          mt-8 p-4 rounded-xl">Checkout</button>
          </div>
        </div>
    `
    atualizaCliqueCarrinho()
    pegaElementosNovos()
}

function pegaElementosNovos() {
    const deleteTrash = document.getElementById('delete')

    deleteTrash.addEventListener('click', () => {
        cart.innerHTML = `
        <div id="cart-class" class="bg-white absolute w-4/5 m-6 h-60 z-40 rounded-xl shadow-2xl">
          <h3 class="font-bold ml-6 my-4">Cart</h3>
          <div class="flex justify-center">
          <h4 class="font-bold mt-16 text-darkgblue">Your cart is empty.</h4>
          </div>
          </div>
        `

        atualizaCliqueCarrinho()
    })
}

function atualizaCliqueCarrinho() {
    const cartClass = document.getElementById('cart-class')

    cartIcon.addEventListener('click', () => {
        cartClass.classList.toggle('hidden')
    })
}

//carrosel 
let current = 0

const next = document.getElementById('next')
const previous = document.getElementById('previous')

const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')

next.addEventListener('click', () => {
    mudaSlide()
})

previous.addEventListener('click', () => {
    mudaSlide()
})


function mudaSlide() {
    current++
    if (current > 4) {
        current = 1
    }

    if (current < 1) {
        current = 1
    }

    if (current == 1) {
        img1.classList.remove('hidden')
        img4.classList.add("hidden")
        img2.classList.add('hidden')
        img3.classList.add('hidden')
    }

    if (current == 2) {
        img1.classList.add('hidden')
        img2.classList.remove('hidden')
        img3.classList.add('hidden')
        img4.classList.add('hidden')
    }

    if (current == 3) {
        img2.classList.add('hidden')
        img3.classList.remove('hidden')
        img4.classList.add('hidden')
        img1.classList.add('hidden')
    }

    if (current == 4) {
        img3.classList.add('hidden')
        img4.classList.remove('hidden')
        img2.classList.add('hidden')
        img1.classList.add('hidden')
    }
}


const thumb1 = document.getElementById("thumb1")
const thumb2 = document.getElementById("thumb2")
const thumb3 = document.getElementById("thumb3")
const thumb4 = document.getElementById("thumb4")

thumb1.addEventListener('click', () => {
    current = 0
    mudaSlide()
    thumb1.classList.add('opacity-40')
    thumb1.classList.add('border-2')
    thumb1.classList.add('border-orange-900')
    thumb3.classList.remove('opacity-40')
    thumb3.classList.remove('border-2')
    thumb3.classList.remove('border-orange-900')
    thumb4.classList.remove('opacity-40')
    thumb4.classList.remove('border-2')
    thumb4.classList.remove('border-orange-900')
    thumb2.classList.remove('opacity-40')
    thumb2.classList.remove('border-2')
    thumb2.classList.remove('border-orange-900')
})

thumb2.addEventListener('click', () => {
    current = 1
    mudaSlide()
    thumb2.classList.add('opacity-40')
    thumb2.classList.add('border-2')
    thumb2.classList.add('border-orange-900')
    thumb3.classList.remove('opacity-40')
    thumb3.classList.remove('border-2')
    thumb3.classList.remove('border-orange-900')
    thumb4.classList.remove('opacity-40')
    thumb4.classList.remove('border-2')
    thumb4.classList.remove('border-orange-900')
    thumb1.classList.remove('opacity-40')
    thumb1.classList.remove('border-2')
    thumb1.classList.remove('border-orange-900')
})

thumb3.addEventListener('click', () => {
    current = 2
    mudaSlide()
    thumb3.classList.add('opacity-40')
    thumb3.classList.add('border-2')
    thumb3.classList.add('border-orange-900')
    thumb2.classList.remove('opacity-40')
    thumb2.classList.remove('border-2')
    thumb2.classList.remove('border-orange-900')
    thumb4.classList.remove('opacity-40')
    thumb4.classList.remove('border-2')
    thumb4.classList.remove('border-orange-900')
    thumb1.classList.remove('opacity-40')
    thumb1.classList.remove('border-2')
    thumb1.classList.remove('border-orange-900')
})

thumb4.addEventListener('click', () => {
    current = 3
    mudaSlide()
    thumb4.classList.add('opacity-40')
    thumb4.classList.add('border-2')
    thumb4.classList.add('border-orange-900')
    thumb2.classList.remove('opacity-40')
    thumb2.classList.remove('border-2')
    thumb2.classList.remove('border-orange-900')
    thumb3.classList.remove('opacity-40')
    thumb3.classList.remove('border-2')
    thumb3.classList.remove('border-orange-900')
    thumb1.classList.remove('opacity-40')
    thumb1.classList.remove('border-2')
    thumb1.classList.remove('border-orange-900')
})