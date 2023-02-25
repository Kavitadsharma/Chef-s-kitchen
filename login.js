
let form=document.querySelector("form");
form.addEventListener("submit", submitform);
function submitform(e){
    
    let username=document.getElementById("username").value;
   
    let password=document.getElementById("password").value;
    let obj={
       
        username:username,
    
        password:password,

    };
   
    let loginlist=JSON.parse(localStorage.getItem("log-list"))||[]
    reglist.push(obj)
   
    localStorage.setItem("log-list",JSON.stringify(loginlist))

}