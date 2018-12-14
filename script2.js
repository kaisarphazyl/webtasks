var url = "http://demo4296963.mockable.io/listCars";
var loadingButton = document.querySelector("button");
var img = document.querySelector("#loading");
var arrayOfCards;
var cardsDiv = document.querySelector("#cards");

function onStreamProceed(text) {
  console.log(text);
  arrayOfCards = new Array();
  arrayOfCards = JSON.parse("[" + text + "]")[0];
  console.log(arrayOfCards);
  
  var cards = document.querySelector("#cards");
  arrayOfCards.forEach(element => {
    var card = document.createElement("div");
    var title = document.createElement("p");
    var price = document.createElement("p");

    title.innerHTML = element.maker + " " + element.model;
    price.innerHTML = element.price;

    title.classList.add("title");
    price.classList.add("price");
