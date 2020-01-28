export default function inputHandler(event) {
  const popupButton = document.querySelector('.popup__button');
  const name = event.currentTarget.elements.name;
  const link = event.currentTarget.elements.link;
  if (name.value.length === 0 || link.value.length === 0) {
    popupButton.setAttribute('disabled', true);
    popupButton.classList.remove('popup__button_activate');
  } else if (name.value.length !== 0 && link.value.length !== 0) {
    popupButton.removeAttribute('disabled');
    popupButton.classList.add('popup__button_activate');
  }
}

const form = document.forms.new;

form.addEventListener('input', inputHandler);
