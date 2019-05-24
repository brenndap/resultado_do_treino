let btnBook = document.querySelector(".btn--book");
let btnTry = document.querySelector(".btn--try");
let btnRevenue = document.querySelector(".btn--revenue");

let slideBook = document.querySelector (".slide__book")
let slideTry = document.querySelector (".slide__try");
let slideRevenues = document.querySelector (".slide__revenue");


btnBook.addEventListener ('click', function(){
  
  if (slideBook.style.display === "none") {
    slideBook.style.display = "block";
    btnBook.innerHTML = "-";

  } else {
    slideBook.style.display = "none";
    btnBook.innerHTML = "+";
  };
});

btnTry.addEventListener ('click', function(){
  
  if (slideTry.style.display === "none") {
    slideTry.style.display = "block";
    btnTry.innerHTML = "-";
  } else {
    slideTry.style.display = "none";
    btnTry.innerHTML = "+";
  };
});

btnRevenue.addEventListener ('click', function(){
  
  if (slideRevenues.style.display === "none") {
    slideRevenues.style.display = "block";
    btnRevenue.innerHTML = "-";
  } else {
    slideRevenues.style.display = "none";
    btnRevenue.innerHTML = "+";
  };  
});