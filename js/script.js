let slide = document.querySelectorAll('.slide');
let img = document.querySelectorAll('.function__content--img');

function slideText () {
    slide.innerHTML = "Tire suas dúvidas";
    slide.style.backgroundColor = "#373849";
}

img.addEventListener ('mouseover', function slideText(){
    console.log ("oi inhai");
    slide.innerHTML = "Tire suas dúvidas";
    slide.style.backgroundColor = "#373849";
});