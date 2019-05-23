let slideBook = document.querySelector (".slideBook")
let slideTry = document.querySelector (".slideTry");
let slideRevenues = document.querySelector ("#slideRevenues")

slideBook.addEventListener ('click', function(){
    book.classList.toggle("slide__book");
});

slideTry.addEventListener ('click', function(){
    
    let test = document.createElement("div");
    test.innerHTML = "CLICK ME";
    test.classList.toggle("slice__try");
    slideTry.append(test); 
});

slideRevenues.addEventListener ('click', function(){
    
    revenue.classList.toggle("slide__revenue");
    
});