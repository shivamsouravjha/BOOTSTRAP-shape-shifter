console.log("Connected!");

const elements = document.querySelectorAll(".element");

elements.forEach(element => element.addEventListener("click", () => {
  element.classList.toggle("styleClass");
}));