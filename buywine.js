// let maindiv=document.getElementById("wine")
// let alert=document.getElementById("alert")
// let buybutton=document.getElementById("buy")

// buybutton.addEventListener("click",()=>{
//     let buydata=JSON.parse(localStorage.getItem("buy"))
//     if(buydata===null){
//         buydata=[]
//     }
//     let yes=false
//     for(let i=0;i<buydata.length;i++){
//         console.log(buydata[i])
//         if(buydata[i].id==element.id){
// yes=true
// break
//         }
//     }
//     if(yes===true){
//         alert.innertext="already placed order"
       
//     }else{
//         buydata.push({...element,quantity:1})
//         alert.innertext="successfully placed order"
//         localStorage.setItem("buy",JSON.stringify(buydata))

//     }
// })
// let buydata=JSON.parse(localStorage.getItem("cart"))||[]
// buybutton.addEventListener("click",()=>{
//     if(checkDuplicate(product)){
//       alert("Product Already in Cart")
//     }else{
//       buydata.push({...product,quantity:1})
//       localStorage.setItem("cart",JSON.stringify(buydata))
//       alert("Product Added To Cart")

//     }
// })
// function  checkDuplicate(product){
//     for(let i=0;i<buydata.length;i++){
//       if(buydata[i].name===product.name){
//         return true
//       }
//     }
//     return false
// }
// console.log(cart)
let buyButtons = document.getElementsByClassName("buy");
		for (let i = 0; i < buyButtons.length; i++) {
			buyButtons[i].addEventListener("click", function() {
				
				alert("Product bought!");
			});
		}
