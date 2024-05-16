"use strict";

const toggleButton = document.querySelector(".toggle-btn");
const lineOne = document.querySelector(".one");
const lineTwo = document.querySelector(".tow");
const lineThree = document.querySelector(".three");
const mainSideBar = document.querySelector(".menu-back-side");
const childSidebar = document.querySelector(".menu-main");
const listLi = document.querySelectorAll(".link-child");

listLi.forEach((list, indexNum, value) => {
  list.addEventListener("click", function () {
    mainSideBar.classList.remove("open-sidebar");
    lineOne.classList.remove("toggler");
    lineTwo.classList.remove("toggler");
    lineThree.classList.remove("toggler");
  });
});

function hamBurger() {
  lineOne.classList.toggle("toggler");
  lineTwo.classList.toggle("toggler");
  lineThree.classList.toggle("toggler");
  mainSideBar.classList.toggle("open-sidebar");
  childSidebar.classList.toggle("daily");
}
toggleButton.addEventListener("click", hamBurger);
mainSideBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-back-side")) {
    mainSideBar.classList.remove("open-sidebar");
    lineOne.classList.remove("toggler");
    lineTwo.classList.remove("toggler");
    lineThree.classList.remove("toggler");
  }
});
