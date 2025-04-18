const number = document.querySelector(".number");
const addNumber = document.querySelector(".counter_add");
const subNumber = document.querySelector(".counter_sub");
const reload = document.querySelector(".counter_reload");
const maxDigit = 2;
addNumber.addEventListener("click", function () {
  number.value++;
  number.style.color = "green";
});
subNumber.addEventListener("click", function () {
  number.value--;
  number.style.color = "red";
});
reload.addEventListener("click", function () {
  number.value = 0;
  number.style.color = "black";
});
number.addEventListener("input", function (e) {
  let value = this.value.replace(/[^0-9]/g);

  if (value.length > maxDigit) {
    value = value.slice(0, maxDigit);
  }
  this.value = value;
});
