const tabTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "\ud83d\ude22 Come Back \ud83d\ude22";
});
window.addEventListener("focus", () => {
  document.title = tabTitle;
});

const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
