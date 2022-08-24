/* 
   step 1: maak simple een button die een class toggled
   stap 2: 
*/

// onclick = (button) => {
//     // console.log('i\'m clicked');
//     if (button == true) {
//         console.log('true');
//     } else {
//         toggleBody.toggle('show');
//     }
// };

function toggleButton() {
  let toggleElement = document.getElementById("toggleBody");
  toggleElement.classList.toggle("show");
}
