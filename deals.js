let deals = [
    {
        id : 1,
        bought : 66,
        name : "2 Lunch Buffets (Veg/Non-Veg)",
        mrp : "7,930",
        price : "3,965",
        off : 50,
        q : 1
    },
    {
        id : 2,
        bought : 12,
        name : "2 Saturday Lunch Buffets (Veg/Non-Veg)",
        mrp : "9,665",
        price : "4,833",
        off : 50,
        q : 1
    },
    {
        id : 3,
        bought : 15,
        name : "Lunch Buffet (Veg/Non-Veg)",
        mrp : "3,965",
        price : "2,082",
        off : 47,
        q : 1
    },
    {
        id : 4,
        bought : 1,
        name : "Saturday Lunch Buffet",
        mrp : "4833",
        price : "2,900",
        off : 40,
        q : 1
    },
    {
        id : 5,
        bought : 114,
        name : "2 Dinner Buffets (Veg/Non-veg)",
        mrp : "9,666",
        price : "4,833",
        off : 50,
        q : 1
    },
    {
        id : 6,
        bought : 27,
        name : "Dinner Buffet (Veg/Non-Veg)",
        mrp : "4,833",
        price : "2,751",
        off : 43,
        q : 1
    },
    {
        id : 7,
        bought : 1,
        name : "2 Sunday Sparkling Brunch",
        mrp : "17,393",
        price : "8,697",
        off : 50,
        q : 1
    }
]

var cart = JSON.parse(localStorage.getItem("cart")) || [];

let left = document.getElementById("left");
let carttable = document.getElementById("carttable");
let bill = document.getElementById("bill");
let buy = document.getElementById("buy");
displaydeals ();

function displaydeals () {
    left.innerHTML = null;
    deals.forEach((element,index)=>{
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "div1");
    let boughtdiv = document.createElement("div");
    boughtdiv.setAttribute("class", "boughtdiv");
    let boughtspan = document.createElement("span");
    boughtspan.setAttribute("class", "boughtspan");
    boughtspan.innerText = element.bought + " Bought";
    boughtdiv.append(boughtspan);
    let offdiv = document.createElement("div");
    offdiv.setAttribute("class", "offdiv");
    offbtn = document.createElement("button");
    offbtn.setAttribute("class", "offbtn");
    offbtn.innerText = element.off + "% OFF";
    offdiv.append(offbtn);
    div1.append(boughtdiv, offdiv);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div2");
    let namediv = document.createElement("div");
    namediv.setAttribute("class", "namediv");
    let name = document.createElement("h3");
    name.setAttribute("class", "name");
    name.innerText = element.name;
    let fixspan = document.createElement("span");
    fixspan.setAttribute("class", "fixspan");
    fixspan.innerText = "Free Cancellation";
    namediv.append(name, fixspan);
    let pricediv = document.createElement("div");
    pricediv.setAttribute("class", "pricediv");
    let mrpprice = document.createElement("p");
    mrpprice.setAttribute("class", "mrpprice");
    let mrp = document.createElement("span")
    mrp.setAttribute("class", "mrp");
    mrp.innerText = "₹"+ element.mrp;
    let price = document.createElement("span")
    price.setAttribute("class", "price");
    price.innerText = "₹"+ element.price;
    mrpprice.append(mrp,price);
    let taxes = document.createElement("span");
    taxes.setAttribute("class", "taxes");
    taxes.innerText = "Inc. of all taxes";
    pricediv.append(mrpprice,taxes);
    div2.append(namediv, pricediv);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "div3");
    let valid = document.createElement("p");
    div3.append(valid);

    let div4 = document.createElement("div");
    div4.setAttribute("class", "div4");
    let div4left = document.createElement("div");
    div4left.setAttribute("class", "div4left");
    let menubtn = document.createElement("button");
    menubtn.setAttribute("class", "menubtn");
    menubtn.innerText = "Menu";
    let detailsbtn = document.createElement("button");
    detailsbtn.setAttribute("class", "detailsbtn");
    detailsbtn.innerText = "Details";
    let div4right = document.createElement("div");
    div4right.setAttribute("class", "div4right");
    let addbtn = document.createElement("button");
    addbtn.setAttribute("class", "addbtn");
    addbtn.innerText = "Add +";
    addbtn.addEventListener("click", ()=>{
        let flag = false;
        cart.filter((ele,ind)=>{
            if(element.id == ele.id) {
                ele.q++;
                flag = true;
            }
        });
        if(flag){
            localStorage.setItem("cart", JSON.stringify(cart));
            displaycart (cart);
        } else {
            cart.push(element);
            localStorage.setItem("cart", JSON.stringify(cart));
            displaycart (cart);
        }
    });
    div4right.append(addbtn);
    div4left.append(menubtn, detailsbtn);
    div4.append(div4left, div4right);

    let hline = document.createElement("hr");
    card.append(div1,div2,div3,div4,hline);
    
    left.append(card);
    })
}

displaycart (cart);

function displaycart (cart) {
    carttable.innerHTML = null;
    cart.forEach((element,index)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.name;
        let td2 = document.createElement("td");
        td2.innerText = "x"+element.q;
        let td3 = document.createElement("td");
        td3.innerText = "₹" + (+element.price.replace(",",""))*element.q;

        tr.append(td1, td2, td3);
        carttable.append(tr);
    })
    billupdate ()
}

billupdate ()

function billupdate () {
    bill.innerHTML = null;
    let total = 0;
    cart.forEach((ele, ind) => {
        total += +ele.price.replace(",", "")*ele.q;
    })
    let sym = document.createElement("span");
    sym.innerText = "₹";
    bill.append(sym, total);
}