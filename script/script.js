var div_contact = document.getElementById('div_contact');
var menu = document.getElementById('menu');
var burgerbar= document.getElementsByClassName('burger');
var nav= document.getElementById('nav');

function display(){
    if(div_contact.style.display === "none"){
    div_contact.style.display = "flex";
    window.scrollTo(0, 4400);
    }else{
    div_contact.style.display = "none";
    }
}
menu.addEventListener("click", ()=>{ 
    if(nav.style.display ==="none"){
        menu.style.width ="90vw";
        menu.style.height= "10vh";
        burgerbar[0].style.transform="rotate(45deg)";
        burgerbar[0].style.width = "20px"
        burgerbar[1].style.display="none";
        burgerbar[2].style.transform="rotate(135deg)";
        burgerbar[2].style.width="20px";
        nav.style.display ="block";
    }
    else{
    menu.style.width ="30px";
    menu.style.height= "30px";
    burgerbar[0].style.transform="rotate(0deg)";
    burgerbar[0].style.width = "30px"
    burgerbar[1].style.display="block";
    burgerbar[2].style.transform="rotate(0deg)";
    burgerbar[2].style.width="30px";
    nav.style.display ="none";    
}
});