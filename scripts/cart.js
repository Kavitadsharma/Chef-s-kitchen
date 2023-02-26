let cartdata = JSON.parse(localStorage.getItem("cartdata") || "[]");

console.log(cartdata);
function renderCart(data) {
    document.querySelector(".cart-items").innerHTML = "";
data.forEach((item) => {
  // <td>The Source - Grenache Rose</td>
  //         <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa-HSRpiwUTTPj84UKVCH8Bnf-QrS4EZ1Zg&usqp=CAU" alt=""></td>
  // 		<td>$122</td>
  // 		<td><button class="button decrease-quantity-button">-</button> <span class="quantity">1</span> <button class="button increase-quantity-button">+</button></td>
  // 		<td><button class="button buy-button">Buy</button> <button class="button remove-button">Remove</button></td>
  let cartItem = document.createElement("tr");
  cartItem.classList.add("cart-item");
  let title = document.createElement("td");
  title.classList.add("name");
  title.innerText = item.name;
  let image = document.createElement("td");
  image.classList.add("image");
  let img = document.createElement("img");
  img.src = item.image;
  image.appendChild(img);
  img.style.width = "280px";
  img.style.height = "280px";
  let price = document.createElement("td");
  price.classList.add("price");
  price.innerText = item.price * item.quantity;
  let quantity = document.createElement("td");
  quantity.classList.add("quantity");
  let decreaseQuantityButton = document.createElement("button");
  decreaseQuantityButton.classList.add("button");
  decreaseQuantityButton.classList.add("decrease-quantity-button");
  decreaseQuantityButton.innerText = "-";
  decreaseQuantityButton.addEventListener("click", function () {
    let quantity = item.quantity;
    quantity--;
    item.quantity = quantity;
    let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
    let existingProductIndex = cart.findIndex((p) => p.name === item.name);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity = quantity;
    }
    localStorage.setItem("cartdata", JSON.stringify(cart));
    quantityElement.innerText = quantity;
    renderCart(cart);
  });
  let quantityElement = document.createElement("span");
  quantityElement.classList.add("quantity");
  quantityElement.innerText = item.quantity;
  let increaseQuantityButton = document.createElement("button");
  increaseQuantityButton.classList.add("button");
  increaseQuantityButton.classList.add("increase-quantity-button");
  increaseQuantityButton.innerText = "+";
  increaseQuantityButton.addEventListener("click", function () {
    let quantity = item.quantity;
    quantity++;
    item.quantity = quantity;
    let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
    let existingProductIndex = cart.findIndex((p) => p.name === item.name);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity = quantity;
    }
    quantityElement.innerText = quantity;
    localStorage.setItem("cartdata", JSON.stringify(cart));

    renderCart(cart);

  });

  quantity.appendChild(decreaseQuantityButton);
  quantity.appendChild(quantityElement);
  quantity.appendChild(increaseQuantityButton);
  let actions = document.createElement("td");
  actions.classList.add("actions");
  let buyButton = document.createElement("button");
  buyButton.classList.add("button");
  buyButton.classList.add("buy-button");
  buyButton.innerText = "Buy";
  buyButton.addEventListener("click",()=>{
        alert("Product bought!")
        remove(item)
  })
  let removeButton = document.createElement("button");
  removeButton.classList.add("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", function () {
    alert("Product removed!");
    remove(item);
});

function remove(item) {
 let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
 cart = cart.filter((p) => p.id !== item.id);
 localStorage.setItem("cartdata", JSON.stringify(cart));
 renderCart(cart);
}
    
  actions.appendChild(buyButton);
  actions.appendChild(removeButton);
  cartItem.appendChild(title);
  cartItem.appendChild(image);
  cartItem.appendChild(price);
  cartItem.appendChild(quantity);
  cartItem.appendChild(actions);

  document.querySelector(".cart-items").appendChild(cartItem);
});
}

renderCart(cartdata);




// // added event listener to the buy button
// let buyButtons = document.getElementsByClassName("buy-button");
// for (let i = 0; i < buyButtons.length; i++) {
//   buyButtons[i].addEventListener("click", function () {
//     alert("Product bought!");
//   });
// }

// let removeButtons = document.getElementsByClassName("remove-button");
// for (let i = 0; i < removeButtons.length; i++) {
//   removeButtons[i].addEventListener("click", function () {
//     alert("Product removed!");
//   });
// }

// let increaseQuantityButtons = document.getElementsByClassName(
//   "increase-quantity-button"
// );
// for (let i = 0; i < increaseQuantityButtons.length; i++) {
//   increaseQuantityButtons[i].addEventListener("click", function () {
//     let quantityElement = this.parentNode.querySelector(".quantity");
//     let quantity = parseInt(quantityElement.innerText);
//     quantity++;
//     quantityElement.innerText = quantity;

//     let productElement = this.parentNode.parentNode;
//     let product = {
//       name: productElement.querySelector(".name").innerText,
//       price: parseFloat(productElement.querySelector(".price").innerText),
//       quantity: quantity,
//     };

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let existingProductIndex = cart.findIndex((p) => p.name === product.name);
//     if (existingProductIndex > -1) {
//       cart[existingProductIndex].quantity = quantity;
//     } else {
//       cart.push(product);
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//   });
// }

// let decreaseQuantityButtons = document.getElementsByClassName(
//   "decrease-quantity-button"
// );
// for (let i = 0; i < decreaseQuantityButtons.length; i++) {
//   decreaseQuantityButtons[i].addEventListener("click", function () {
//     let quantityElement = this.parentNode.querySelector(".quantity");
//     let quantity = parseInt(quantityElement.innerText);
//     if (quantity > 1) {
//       quantity--;
//       quantityElement.innerText = quantity;

//       let productElement = this.parentNode.parentNode;
//       let product = {
//         name: productElement.querySelector(".name").innerText,
//         price: parseFloat(productElement.querySelector(".price").innerText),
//         quantity: quantity,
//       };

//       let cart = JSON.parse(localStorage.getItem("cart")) || [];
//       let existingProductIndex = cart.findIndex((p) => p.name === product.name);
//       if (existingProductIndex > -1) {
//         cart[existingProductIndex].quantity = quantity;
//       } else {
//         cart.push(product);
//       }
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   });
// }