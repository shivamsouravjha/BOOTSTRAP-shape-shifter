console.log("Connected!");

const elements = document.querySelectorAll(".element");
const time = 3000;

elements.forEach(element => element.addEventListener("click", () => {

  riseUp(element)
  setTimeout(function(){element.classList.toggle("styleClass");}, time);
}));

function riseUp(element){
  element.classList.toggle("styleClass");
}