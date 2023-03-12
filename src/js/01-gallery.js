// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const makeGalleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryListEl.innerHTML = makeGalleryItemsMarkup;
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(item => {
      return `<div><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`;
    })
    .join('');
}
const makeSimpleLightBoxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
