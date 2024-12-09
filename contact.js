let reset=document.querySelector(".op_reset");
let home=document.querySelector(".op_home");
let name=document.querySelector(".fill_name");
let email=document.querySelector(".fill_email");
let msg=document.querySelector(".fill_text");


reset.addEventListener("click",()=>{
    
    name.value="";
email.value="";
msg.value="";
})


home.addEventListener("click",()=>{
window.location.href="/home.html";
})




