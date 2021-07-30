var menu=document.getElementsByClassName("menu-toggle")[0];
var links=document.getElementsByClassName("collapse")[0];

menu.addEventListener("click",function(){
    links.classList.toggle("open-close");
    links.classList.toggle("animation");
})