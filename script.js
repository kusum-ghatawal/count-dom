let h1 = document.getElementById("count");
let a = 0;

let increase = document.getElementById("increase");
increase.addEventListener("click", () => {
  console.log("increase");
  h1.textContent = ++a;
  if (a > 0) {
    h1.style.color = "green";
  }

  if (a == 0) {
    h1.style.color = "black";
  }
});

let decrease = document.getElementById("decrease");
decrease.addEventListener("click", () => {
  console.log("decrease");
  h1.textContent = --a;
  if (a < 0) {
    h1.style.color = "red";
  }
  if (a == 0) {
    h1.style.color = "black";
  }
});

let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  console.log("reset");
  a = 0;
  h1.textContent = a;
  h1.style.color = "black";
});
