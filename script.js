const menu = document.querySelector("#menu");
const navgrow = document.querySelector(".nav_grow");
const navshot = document.querySelector(".nav_short");
const backbtn = document.querySelector(".back_arrow");
const dashboard = document.querySelector(".container");
console.log(backbtn);

function navigation(){
    navgrow.style.display = "flex";
    dashboard.classList.add("container_ease_in");
    navgrow.classList.add("nav_ease_in");

}
function shrink(){
    navgrow.style.display = "none";
    dashboard.classList.remove("container_ease_in");
}

menu.addEventListener("click",navigation);
backbtn.addEventListener("click",shrink);
