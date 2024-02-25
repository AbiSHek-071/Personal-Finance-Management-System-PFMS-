const menu = document.querySelector("#menu");
const navgrow = document.querySelector(".nav_grow");
const navshot = document.querySelector(".nav_short");
const backbtn = document.querySelector(".back_arrow");
const dashboard = document.querySelector(".container");
const taskbar = document.querySelector(".taskbar");

console.log(backbtn);

function navigation(){
    if(navgrow.classList.contains("navgrow_anm")){
        navgrow.classList.remove("navgrow_anm");
      
        navgrow.style.display = "none";
    }
    else{
        navgrow.classList.add("navgrow_anm");
        dashboard.classList.add("container_ease_in");
        taskbar.classList.add("container_ease_in");
        navgrow.style.display = "flex";
    }
 
    

}
function shrink(){
    if(navgrow.classList.contains("navgrow_anm")){
        navgrow.classList.remove("navgrow_anm");
        dashboard.classList.remove("container_ease_in");
        taskbar.classList.remove("container_ease_in");
       
    }
    else{
        navgrow.classList.add("navgrow_anm");
        navgrow.style.display = "flex";
    }
   
}

menu.addEventListener("click",navigation);
backbtn.addEventListener("click",shrink);












