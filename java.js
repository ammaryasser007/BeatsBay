// .........................Hamburger Section...............................//

let hamburger = document.getElementById("hamburger");
let subMenu = document.getElementById("sub-menu");

hamburger.addEventListener("click", () => {
    if (subMenu.style.display === "none") {
        subMenu.style.display = "flex";
    }else {
        subMenu.style.display = "none";
    }
})

// .......................Offers & Gallery Section.........................//
let productGallery = document.querySelector(".product-gallery");
let slideIndex = 0;
showSlides();

function showSlides() {
    
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
    slideIndex++;
    if (slideIndex > slides.length)
    { slideIndex = 1 }
    slides[slideIndex-1].style.display = "flex";

    setTimeout(showSlides, 3000); 
}

// ............................Cart Section...................................//

let Btns = document.querySelectorAll(".add-button");
let cartimg = document.getElementById("cart-img");
let cart = document.getElementById("cart");
let cartItems = []; // Array to store each item with its details and quantity

function PNE(event) {
    let img = event.target.parentElement.parentElement.children[0].children[0].src;
    let name = event.target.parentElement.parentElement.children[1].textContent;
    let price = parseFloat(event.target.parentElement.parentElement.children[2].textContent.replace('$', '')); // Assuming price is in "$" format
    
    // Check if item is already in the cart
    let existingItem = cartItems.find(item => item.name === name);
    
    if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new item to cartItems array
        cartItems.push({
            img: img,
            name: name,
            price: price, // Store the original price per unit
            quantity: 1   // Default quantity to 1
        });
    }
    
    // Render the cart items with updated quantities
    renderCart();
}

function renderCart() {
    cart.innerHTML = cartItems.map((item, index) => `
        <div class="inner-card" data-index="${index}">
        <div class="item-img"><img src="${item.img}" alt=""></div>
        <div class="item-name"><p>${item.name}</p></div>
        <div class="item-price"><p>$${(item.price * item.quantity).toFixed(2)}</p></div>
        <span>${item.quantity}</span>
        <div class="quantity-control">
        <button class="decrease-btn" onclick="decreaseQuantity(${index})">-</button>
        <button class="increase-btn" onclick="increaseQuantity(${index})">+</button>
        </div>
        </div>
        `).join('');
        total()// Add total to cart
        displayCartSection()
        payProcess()
}
function total() {
    let total = document.createElement("div");
    total.classList.add("total");
    cart.appendChild(total);
    total.innerHTML = `<p>Total: $${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>`
    quantity()
}

function displayCartSection() {
    if (cartItems.length == 0) {
        document.getElementById("cart").style.display = "none";
        document.getElementById("cart-img").style.display = "none";
        
        
    } else if (cartItems.length > 0) {
        document.getElementById("cart-img").style.display = "flex";
    }
} 

function quantity() {
    let totalQuantities = document.createElement("div");
    totalQuantities.classList.add("totalQuantities");
    totalQuantities.innerHTML = `<p>Total Quantity: ${cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>`
    cartimg.firstElementChild.innerHTML = `<p>(${cartItems.reduce((acc, item) => acc + item.quantity, 0)})</p>`
}

    function increaseQuantity(index) {
        cartItems[index].quantity += 1;
        renderCart(); // Update cart display
    }
    
    function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        cartItems.splice(index, 1); // Remove item from cart if quantity reaches 0
    }
    renderCart(); // Update cart display
}

    function payProcess() {
        let payBtn = document.createElement("button");
        payBtn.classList.add("pay-btn");
        payBtn.innerHTML = `<p>Pay Now</p>`;
        cart.appendChild(payBtn);
        payBtn.addEventListener("click", () => {
            if (cartItems.length > 0) {
                alert("Payment Successful, Thank You!");
                document.getElementById("cart").style.display = "none";
                document.getElementById("cart-img").style.display = "none";
                cartItems = [];
            }
})
}


// ..........................Filter Section.............................//

let card = document.querySelectorAll(".card");


function displayAllElements() {
    card.forEach(Element => {
        Element.style.display = "flex";
    })
}
function hideAllElements() {
    card.forEach(Element => {
        Element.style.display = "none";
    })
}
function displayWaveWare() {
    hideAllElements();
    document.querySelectorAll("#WaveWare").forEach(Element => {
        Element.style.display = "flex";
    })
}
function displaySonicNest() {
    hideAllElements();
    document.querySelectorAll("#SonicNest").forEach(Element => {
        Element.style.display = "flex";
    })
}
function displayVibeVault() {
    hideAllElements();
    document.querySelectorAll("#VibeVault").forEach(Element => {
        Element.style.display = "flex";
    })
}
function displaySoundScape() {
    hideAllElements();
    document.querySelectorAll("#SoundScape").forEach(Element => {
        Element.style.display = "flex";
    })
}
function displayPulsePods() {
    hideAllElements();
    document.querySelectorAll("#PulsePods").forEach(Element => {
        Element.style.display = "flex";
    })
}
function displayAuraTunes() {
    hideAllElements();
    document.querySelectorAll("#AuraTunes").forEach(Element => {
        Element.style.display = "flex";
    })
}
function displayHeadphonix() {
    hideAllElements();
    document.querySelectorAll("#Headphonix").forEach(Element => {
        Element.style.display = "flex";
    })
}

// ...........................................................................//

Btns.forEach(Element => {
    Element.addEventListener("click", () => {
        cartimg.style.display = "flex";
    });
})

cartimg.addEventListener("click", () => {
    if (cart.style.display === "flex") {
        cart.style.display = "none";
    } else {
        cart.style.display = "flex";
    }
})



// ..........................Footer Section.............................//

let time = new Date();
let copyright = document.getElementById("copyright");
copyright.textContent = `© ${time.getFullYear()} Developed by AY. All rights reserved.`

