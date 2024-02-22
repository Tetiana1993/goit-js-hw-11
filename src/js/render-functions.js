import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




export function checkupInput() {
    iziToast.warning({
    //   title: 'Caution',
      message: 'Please, enter something to search!',
      position: 'topRight',
    });
  }
  
  export function notFound() {
    iziToast.warning({
    //   title: 'Caution',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }

  export function imgTemplate(data) {
    return data.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
    </a>
    <div class="gallery-descr">
    <p><b>Likes</b> ${likes}</p>
    <p><b>Views</b> ${views}</p>
    <p><b>Comments</b> ${comments}</p>
    <p><b>Downloads</b> ${downloads}</p>
   </div>
  </li>`;
        }
      )
      .join('\n');
      imagesList.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.on('show.simplelightbox');
    lightbox.refresh();
  }

  const options = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
};