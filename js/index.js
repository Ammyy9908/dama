//get all images in webpage and add lazyloading

const images = document.querySelectorAll("img");

Array.from(images).forEach((img) => {
  img.setAttribute("loading", "lazy");
});

//remove gray background from boxes once they are in viewport
const boxes = document.querySelectorAll(".image-box");

window.onload = () => {
  Array.from(boxes).forEach((box) => {
    box.style.backgroundColor = "transparent";
  });
  document.querySelector("header").style.backgroundColor = "transparent";
};
