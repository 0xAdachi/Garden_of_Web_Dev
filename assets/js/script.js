"use strict";

import { load_sidebar } from "./sidebar.js";

load_sidebar();

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
