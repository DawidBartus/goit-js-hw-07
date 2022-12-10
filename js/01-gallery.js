import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

for (let element of galleryItems) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("gallery__item");

  let bigImgLink = document.createElement("a");
  bigImgLink.href = element.original;
  bigImgLink.classList.add("gallery__link");

  let image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = element.preview;
  image.dataset.source = element.original;
  image.alt = element.description;

  gallery.append(wrapper);
  wrapper.append(bigImgLink);
  bigImgLink.append(image);
}
let instance;

const makeMeBigger = (e) => {
  e.preventDefault();
  instance = basicLightbox.create(`
    <img src="${e.target.getAttribute("data-source")}">
`);

  instance.show();
};

gallery.addEventListener("click", makeMeBigger);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    instance.close();
  }
});
