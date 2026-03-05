let h1 = document.getElementById("count");
let a = 1;


let increase = document.getElementById("increase");
increase.addEventListener("click", () => {
  console.log("click");
  h1.textContent = ++a;
});

let decrease = document.getElementById("decrease");
decrease.addEventListener("click", () => {
  console.log("click");
  h1.textContent = --a;
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  console.log("click");
  h1.textContent = 0 ;
});