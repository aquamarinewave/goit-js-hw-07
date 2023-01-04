import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
);

galleryList.innerHTML = markup.join('');


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionType: "attr",
    captionDelay: 250	
});
