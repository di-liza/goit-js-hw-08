// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');
const storeMakeGalley = makeGallery(galleryItems);
galleryContainerEl.innerHTML = storeMakeGalley;

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
const createLightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
