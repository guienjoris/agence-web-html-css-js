
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
    div_contact.classList.toggle('div_contact_flex');
}
document.body.addEventListener("click", (e)=>{
    if (e.target != menu && burgerbar){
    if(menu.classList = "menu_display"){
        menu.classList.remove("menu_display");
        menu.classList.add("menu");
    }
}
})

menu.addEventListener("click", ()=>{ 
    menu.classList.toggle('menu_display');
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
