const checkboxes = document.getElementById("option1");
const checkboxes = document.getElementById("option2");
const checkboxes = document.getElementById("option3");
const checkboxes = document.getElementById("option4");
const checkboxes = document.getElementById("option5);
const checkboxes = document.getElementById("option6");

console.log(checkboxes.checked); // true or false
checkboxes.addEventListener("change",function (){
  if (this.checked){
    console.log("Checkbox cochée");}
  else {
    console.log("Checkbox décochée");}
});