let countries = ["Kazakhstan","Russia","England","France"];
let cities = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
let countriesWEX = document.querySelector("#countries");
let citiesWEX = document.querySelector("#cities");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.text = countries[i];
    countriesWEX.add(option);
}

let whichCountry;
countriesWEX.addEventListener("change", function(e) {
    whichCountry = e.currentTarget.value;
    let options = citiesWEX.querySelectorAll("option");
    for (let i = 0; i < options.length; i++) {
        options[i].remove();
    }
    for (let i = 0; i < cities[whichCountry].length; i++) {
        let option = document.createElement("option");
        option.text = cities[whichCountry][i];
        citiesWEX.add(option);
    }
}) 
