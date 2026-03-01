const x = document.querySelector(".bt");
const v = document.querySelector(".temp");
x.addEventListener("click", function () {
  v.classList.toggle("show");
});

const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");
const km = document.querySelector(".km");
const mp = document.querySelector(".mp");
const mili = document.querySelector(".mili");
const inches = document.querySelector(".inches");

cel.addEventListener("click", () => {
  cel.classList.add("active");
  fah.classList.remove("active");
});

fah.addEventListener("click", () => {
  fah.classList.add("active");
  cel.classList.remove("active");
});

km.addEventListener("click", () => {
  km.classList.add("active");
  mp.classList.remove("active");
});

mp.addEventListener("click", () => {
  mp.classList.add("active");
  km.classList.remove("active");
});

mili.addEventListener("click", () => {
  mili.classList.add("active");
  inches.classList.remove("active");
});

inches.addEventListener("click", () => {
  inches.classList.add("active");
  mili.classList.remove("active");
});
