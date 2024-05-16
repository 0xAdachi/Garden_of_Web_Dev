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

// ### Youtube Thumbnail related codes ### //

// ### returns the Video ID from a Youtube url ### //
function getVideoIDfromYTurl(url) {
  let ytRegExp = /^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/;
  let ytMatch = url.match(ytRegExp);
  if (ytMatch && ytMatch[2].length === 11) {
    console.log(ytMatch[2]);
    return ytMatch[2];
  } else {
    console.log("not a valid yt url");
    return null;
  }
}

let ytVideoURL = "https://youtu.be/VYAUvkHC8aI?si=3DKs-MC-_mLS_Y3o";
let ytVideoID = getVideoIDfromYTurl(ytVideoURL);
const memoImg = document.querySelectorAll(".memo-img");
memoImg.forEach((currElem) => {
  currElem.src = `https://img.youtube.com/vi/${ytVideoID}/maxresdefault.jpg`;
});

// ### Youtube Thumbnail related codes (END) ### //
