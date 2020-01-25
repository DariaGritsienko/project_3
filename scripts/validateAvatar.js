const formAvatar = document.querySelector('.popup-image__form');
function validateAvatar(event){
  const linkAvatar = event.currentTarget.elements.linkAvatar;
  const avatarButton = document.querySelector('.popup-image__button');

  if (!linkAvatar.checkValidity()) {
    avatarButton.setAttribute('disabled', true);
    avatarButton.classList.remove('popup-image__button_activate');
  } else {
    avatarButton.removeAttribute('disabled');
    avatarButton.classList.add('popup-image__button_activate');
  }
}

formAvatar.addEventListener('input', validateAvatar);

formAvatar.addEventListener('submit', function(event){
  event.preventDefault();

  avatar.updateAvatar(event);

  formAvatar.reset();
})
