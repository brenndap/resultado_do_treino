let btnBook = document.querySelector(".btn--book");
let btnTry = document.querySelector(".btn--try");
let btnRevenue = document.querySelector(".btn--revenue");

let slideBook = document.querySelector (".slide__book")
let slideTry = document.querySelector (".slide__try");
let slideRevenues = document.querySelector (".slide__revenue")





btnBook.addEventListener ('click', function(){

    slideBook.classList.toggle("active");
    // slideBook.animate ([
    //     {transform: "translateY(0px)"},
    //     {transform: "translateY(300px)"}

    // ], 
    // {duration: 1000, width: 60%})

    
    if (slideBook.style.display === "none") {
        slideBook.style.display = "block";
        btnBook.innerHTML = "-"
      } else {
        slideBook.style.display = "none"
        btnBook.innerHTML = "+"
      }

});

btnTry.addEventListener ('click', function(){
    
    if (slideTry.style.display === "none") {
        slideTry.style.display = "block";
      } else {
        slideTry.style.display = "none"
      }

});

btnRevenue.addEventListener ('click', function(){
    
    if (slideRevenues.style.display === "none") {
        slideRevenues.style.display = "block";
      } else {
        slideRevenues.style.display = "none"
      }
    
});