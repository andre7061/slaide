const slaiders = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");

let count = 0;

function getNextSlaider() {

  if (count === slaiders.length - 1) {
    count = -1;
  }
  slaiders.forEach((slaid) => slaid.classList.remove("slider__item_active"));
  slaiders[++count].classList.add("slider__item_active");
  addActivClassDot();
}

function getPrevSlaider() {
  if (count <= 0) {
    count = slaiders.length;
  }
  slaiders.forEach((slaid) => slaid.classList.remove("slider__item_active"));
  slaiders[--count].classList.add("slider__item_active");
  addActivClassDot();
}

dots.forEach((dot, el) => {
  dot.addEventListener("click", () => {
    slaiders.forEach((d) => d.classList.remove("slider__item_active"));
    slaiders[el].classList.add("slider__item_active");
    count = el;
    addActivClassDot();
  });
});
function addActivClassDot() {
  dots.forEach((el) => el.classList.remove("slider__dot_active"));
  dots[count].classList.add("slider__dot_active");
}
next.addEventListener("click", getNextSlaider);
prev.addEventListener("click", getPrevSlaider);
addActivClassDot();
