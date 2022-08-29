/* 
   step 1: maak meerder divs
   stap 2: eventlister(click) toevoegen 
   stap 3: queryselectorall met een index om een class te toggle
*/

function toggleButton() {
    let toggleElement = document.getElementById("toggleBody");
    toggleElement.classList.toggle("show");
}
