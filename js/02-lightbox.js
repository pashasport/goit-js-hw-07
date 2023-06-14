import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryImgEl = document.querySelector(".gallery");
const imgItems = createImageGalleryMarkup(galleryItems);
galleryImgEl.insertAdjacentHTML("beforeend", imgItems);
galleryImgEl.addEventListener("click", onImgClick);

function createImageGalleryMarkup(img) {
  return img.reduce(
    (acc, { preview, original, description }) =>
      (acc += `
    <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>
     </li>`),
    ""
  );
}
function onImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

//   return el
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
//     })
//     .join("");
