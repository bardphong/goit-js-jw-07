import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerySort = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>
        </li>`
    }).join('');
};

const onPhotoClick = event => {
    event.preventDefault();

    const instance = basicLightbox.create(`<img class="gallery__image" src="${event.target.dataset.source}"/>`)
    instance.show()
};

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onPhotoClick);

const gallerySorted = gallerySort(galleryItems);

gallery.innerHTML = gallerySorted;

console.log(galleryItems);