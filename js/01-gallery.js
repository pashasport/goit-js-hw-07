import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryImg = document.querySelector(".gallery");
const itemsMarkup = createImgGalleryMarkup(galleryItems);
galleryImg.insertAdjacentHTML("beforeend", itemsMarkup);
galleryImg.addEventListener("click", onImgClick);

function createImgGalleryMarkup(el) {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImgClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const imgModalCreate = basicLightbox.create(
    `
		<img src="${e.target.dataset.source}">
	`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyClose),
      onClose: () => window.removeEventListener("keydown", onEscKeyClose),
    }
  );
  imgModalCreate.show();

  function onEscKeyClose(e) {
    if (e.code === "Escape") {
      imgModalCreate.close();
    }
  }
}
