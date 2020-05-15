let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");
let dot4 = document.querySelector(".dot4");
let dotCurrent = document.querySelector(".dot-current");
let dots = document.querySelectorAll(".dot");
let showcaseImg = document.querySelector(".showcase-img");

dots.forEach((dot) => {
  dot.addEventListener("click", dotClicked);
});

function dotClicked(e) {
  //reset all dots status
  dots.forEach((dot) => {
    dot.classList.remove("dot-current");
  });
  e.target.classList.add("dot-current");

  if (e.target.classList.contains("dot1")) {
    showcaseImg.src = "images/home/tea1.jpg";
  }

  if (e.target.classList.contains("dot2")) {
    showcaseImg.src = "images/home/tea2.jpg";
  }
  if (e.target.classList.contains("dot3")) {
    showcaseImg.src = "images/home/tea3.jpg";
  }
  if (e.target.classList.contains("dot4")) {
    showcaseImg.src = "images/home/tea4.jpg";
  }
}

//auto-play images
// let i = 0;
// let images = [];
// let time = 3000;

// images[0] = "images/home/tea1.jpg";
// images[1] = "images/home/tea2.jpg";
// images[2] = "images/home/tea3.jpg";
// images[3] = "images/home/tea4.jpg";

// function changeImage() {
//   showcaseImg.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImage()", time);
// }

// window.onload = changeImage;
