
var bigImage=document.querySelector("#bigImage");
var bigImg = bigImage.querySelectorAll("img")[0];
var carousel = document.querySelector("#carousel");
var images =carousel.querySelectorAll("img");

for (var i=0; i < images.length;i++){
  
  
  images[i].addEventListener("click",LoL);

}


  function LoL (event) {
  
    
    bigImg.src=event.currentTarget.src;
  }
