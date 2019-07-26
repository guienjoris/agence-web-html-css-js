
var div_contact = document.getElementById('div_contact');
var menu = document.getElementById('menu');
var burgerbar= document.getElementsByClassName('burger');
var nav= document.getElementById('nav');
var toggle =document.getElementById('toggle');
var border_contact= document.getElementsByClassName('contact_border');
var ion_icon = document.getElementsByTagName('ion-icon');
var domaines = document.getElementById('domaines');
var presentation = document.getElementById('presentation')
window.onload = ()=>{
    if(localStorage.getItem("modenuit")==="nuit"){
        toggle_f();
    }
}
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
        menu.style.width ="96vw";
        menu.style.height= "7vh";
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

function toggle_f(){
    var toggleAttribute= toggle.getAttribute("name") ;
    console.log(toggleAttribute);
    if(toggleAttribute === "moon"){
        toggle.setAttribute("name", "sunny");
        border_contact[0].style.backgroundColor = "black";
        ion_icon[1].style.color = "white";
        ion_icon[2].style.color = "white";
        ion_icon[3].style.color = "white";
        ion_icon[4].style.color = "white";
        domaines.style.color="white";
        document.body.style.backgroundColor="#242C37";
        presentation.style.color = "white";
        localStorage.setItem('modenuit', 'nuit');
    }
    if(toggleAttribute === "sunny"){
        toggle.setAttribute("name","moon");
        border_contact[0].style.backgroundColor = "white";
        ion_icon[1].style.color = "black";
        ion_icon[2].style.color = "black";
        ion_icon[3].style.color = "black";
        ion_icon[4].style.color = "black";
        domaines.style.color="black";
        presentation.style.color = "black";
        document.body.style.backgroundColor="#F8FAFB";
        localStorage.setItem('modenuit', 'jour');

    }
}
