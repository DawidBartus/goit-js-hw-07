import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

console.log(galleryItems);

for (let el of galleryItems) {
  let newLink = document.createElement("a");
  newLink.classList.add("gallery__link");
  newLink.href = el.original;

  let newImg = document.createElement("img");
  newImg.classList.add("gallery__image");
  newImg.src = el.preview;
  newImg.alt = el.description;

  gallery.append(newLink);
  newLink.append(newImg);
}

let lightboxElement = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
});
