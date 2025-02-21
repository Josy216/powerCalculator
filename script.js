const minute = document.getElementById("voltage");
const current = document.getElementById("current");
const display = document.getElementById("demo");
const togle = document.querySelector(".display");
const btn = document.querySelector("button");

btn.addEventListener("click", function minuteConvertor() {
  togle.style.display = "block";
  let converted = minute.value * current.value;
  display.innerHTML = ` Power is: ${converted} wat `;
});
