import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
);

galleryList.innerHTML = markup.join('');

galleryList.addEventListener("click", clickImg);


function clickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const urlOriginal = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `<img src="${urlOriginal}" width="800" height="800" />`
  );
  instance.show();

  const closeModal = ({key}) => {
    if (key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModal);
    }
  }
  document.addEventListener("keydown", closeModal);
};

