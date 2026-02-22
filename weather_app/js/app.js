const x = document.querySelector(".bt");
const v = document.querySelector(".temp");
x.addEventListener("click", function () {
  v.classList.toggle("show");
});

const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");

cel.addEventListener("click", () => {
  cel.classList.add("active");
  fah.classList.remove("active");
});

fah.addEventListener("click", () => {
  fah.classList.add("active");
  cel.classList.remove("active");
});
