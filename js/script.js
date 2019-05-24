let btnBook = document.querySelector(".btn--book");
let btnTry = document.querySelector(".btn--try");
let btnRevenue = document.querySelector(".btn--revenue");

let slideBook = document.querySelector (".slide__book")
let slideTry = document.querySelector (".slide__try");
let slideRevenues = document.querySelector (".slide__revenue");


btnBook.addEventListener ('click', function(){
  
  if (slideBook.style.maxHeight){
    slideBook.style.maxHeight = null;
    btnBook.innerHTML = "+";
    
  } else {
    slideBook.style.maxHeight = slideBook.scrollHeight + "px";
    btnBook.innerHTML = "-";
  } 
});

btnTry.addEventListener ('click', function(){
  
  if (slideTry.style.maxHeight){
    slideTry.style.maxHeight = null;
    btnTry.innerHTML = "+";
    
  } else {
    slideTry.style.maxHeight = slideTry.scrollHeight + "px";
    btnTry.innerHTML = "-";
  } 
});

btnRevenue.addEventListener ('click', function(){
  
  if (slideRevenues.style.maxHeight){
    slideRevenues.style.maxHeight = null;
    btnRevenue.innerHTML = "+";
    
  } else {
    slideRevenues.style.maxHeight = slideRevenues.scrollHeight + "px";
    btnBook.innerHTML = "-";

  } 
});