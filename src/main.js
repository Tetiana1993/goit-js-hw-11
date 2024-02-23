
import { searchImg } from './js/pixabay-api';
import { checkupInput, notFound } from './js/render-functions';
import { renderImg } from './js/render-functions';
import { lightbox } from './js/render-functions';





export const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.saerch-img'),
    listEl: document.querySelector('.gallery'),
    spanEl: document.querySelector('.loader')
};

refs.spanEl.style.display = 'none';

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const search = e.target.elements.text.value.trim();
  refs.spanEl.style.display = 'block';

  if (!search) {
    checkupInput();
    return;
  }
  searchImg(search)
    .then(data => {
      if (data.hits.length === 0) {
        notFound();
        refs.listEl.innerHTML = '';
      } else {
        renderImg(data);
        lightbox.on('show.simplelightbox');
        lightbox.refresh();
      }
      refs.loader.style.display = 'none';
    })
    .catch(err => console.log(err));

  e.target.reset();
}