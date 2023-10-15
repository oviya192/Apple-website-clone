let navlist=document.getElementById("nav-list")
let openMenu=document.querySelector(".menuopen")
let cross = document.querySelector(".cross")
openMenu.addEventListener('click',() =>
{
    navlist.style.opacity="100%"
    openMenu.style.display="none"
})
cross.addEventListener("click",() =>{
    navlist.style.opacity = "0%"
   setTimeout(() =>{
    openMenu.style.display = "block"
},400)

})


