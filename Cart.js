// added event listener to the buy button
let buyButtons = document.getElementsByClassName("buy-button");
for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function() {
        
        alert("Product bought!");
    });
}

let removeButtons = document.getElementsByClassName("remove-button");
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
        
        alert("Product removed!");
    });
}


let increaseQuantityButtons = document.getElementsByClassName("increase-quantity-button");
for (let i = 0; i < increaseQuantityButtons.length; i++) {
    increaseQuantityButtons[i].addEventListener("click", function() {
        let quantityElement = this.parentNode.querySelector(".quantity");
        let quantity = parseInt(quantityElement.innerText);
        quantity++;
        quantityElement.innerText = quantity;
        
        
        let productElement = this.parentNode.parentNode;
        let product = {
            name: productElement.querySelector(".name").innerText,
            price: parseFloat(productElement.querySelector(".price").innerText),
            quantity: quantity
        };
        
       
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingProductIndex = cart.findIndex(p => p.name === product.name);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity = quantity;
        } else {
            cart.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    });
}


let decreaseQuantityButtons = document.getElementsByClassName("decrease-quantity-button");
for (let i = 0; i < decreaseQuantityButtons.length; i++) {
    decreaseQuantityButtons[i].addEventListener("click", function() {
        let quantityElement = this.parentNode.querySelector(".quantity");
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 1) {
            quantity--;
            quantityElement.innerText = quantity;
            
            let productElement = this.parentNode.parentNode;
            let product = {
                name: productElement.querySelector(".name").innerText,
                price: parseFloat(productElement.querySelector(".price").innerText),
                quantity: quantity
            };
            

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProductIndex = cart.findIndex(p => p.name === product.name);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity = quantity;
            } else {
                cart.push(product);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    });
}