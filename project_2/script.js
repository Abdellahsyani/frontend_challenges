const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const inner = card.querySelector(".card-inner");

  card.addEventListener("mouseenter", () => {
    inner.classList.add("is-flipped");
  });

  card.addEventListener("mouseleave", () => {
    inner.classList.remove("is-flipped");
  });
});
