const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector(".logo");
const spans = document.querySelectorAll("span");

const close = btn.addEventListener("click", function() {
    console.log("I got clicked");
    sidebar.classList.toggle("close");
    for (const span of spans){
        span.classList.toggle("text");
    }
    
});