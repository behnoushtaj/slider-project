const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let imgElem = $.querySelector(".img-slider");
let imgArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imgIndex = 0;

function prevItem() {


  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgArray.length - 1;
  }
  imgElem.setAttribute("src", imgArray[imgIndex]);

}

function nextItem() {

  imgIndex++;
  if (imgIndex > imgArray.length - 1) {
    imgIndex = 0;
  }

  imgElem.setAttribute("src", imgArray[imgIndex]);
}


setInterval(nextItem , 3000)

prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
