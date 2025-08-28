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
function dragElement(TaskElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  TaskElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;he dog
    document.onpointerup = StopElementDrag;
    elementDrag(e);
  }
  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;
    TaskElement.style.top = (TaskElement.offsetTop - pos2) + "px";
    TaskElement.style.left = (TaskElement.offsetLeft - pos1) + px`;}

  function StopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
dragElement(document.getElementById("walk"));
dragElement(document.getElementById("water"));

