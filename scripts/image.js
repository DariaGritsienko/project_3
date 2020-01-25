const root = document.querySelector('.root');

function imageOpened(event){
  const imagePicture = document.querySelector('.image__picture');
  const image = root.querySelector('.image');
    if (event.target.classList.contains('place-card__image')){
      image.classList.toggle('image_is-opened');
      imagePicture.style.backgroundImage = event.target.style.backgroundImage;
    }
    if (event.target.classList.contains('image__close')){
      image.classList.toggle('image_is-opened', false);
  }
}

root.addEventListener('click', imageOpened);
