const btnChangeMode = document.getElementById("btn-changeMode");
const body = document.querySelector("body");

btnChangeMode.addEventListener("click",()=>{
    body.classList.toggle("darkMode");
});