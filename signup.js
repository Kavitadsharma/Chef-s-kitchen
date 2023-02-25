let form=document.querySelector("form");
form.addEventListener("submit", submitform);
function submitform(e){
    e.preventDefault();
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let obj={
        firstname:firstname,
        lastname:lastname,
        username:username,
        email:email,
        password:password,

    };
   
    let reglist=JSON.parse(localStorage.getItem("reg-list"))||[]
    reglist.push(obj)
   
    localStorage.setItem("reg-list",JSON.stringify(reglist))

}