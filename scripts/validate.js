class Validation {
  constructor(words){
    this.words = words;
  }
  handleValidate(word) {
    const inputs = Array.from(document.forms.change.elements);
    const changeProfileButton = document.querySelector('.change-profile__button');
    let isValid = true;
    this.validate(word);

    inputs.forEach((elem) => {
      if (elem.id !== submitProfile.id) {
        if (!this.validate(elem)) isValid = false;
      }
    });
    if (isValid) {
      changeProfileButton.removeAttribute('disabled');
    } else {
      changeProfileButton.setAttribute('disabled', true);
    }
  }
  validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);

    if (!element.checkValidity()) {

      if (element.validity.valueMissing) {
        errorElement.textContent = this.words.validationRequired;
      }
      if (element.validity.tooShort) {
        errorElement.textContent = this.words.validationLenght;
      }
      this.activateError(errorElement);

      return false;
    }
    this.resetError(element);
    return true;
  }
  activateError(element) {
    element.parentNode.classList.add('change-profile__input__invalid');
  }
  resetError(element) {
    element.parentNode.classList.remove('change-profile__input__invalid');
    element.textContent = '';
  }
  sendForm() {
    const inputs = Array.from(document.forms.change.elements);
    let isValidForm = true;

    inputs.forEach((elem) => {
      if (elem.id !== submitProfile.id) {
        if (!this.validate(elem)) isValidForm = false;
      }
    });
    if (isValidForm) {
      let user = {
        name: `${username.value}`,
        about: `${about.value}`
      };
      api.patchProfile(user)
      changeProfile.closeProfile();
    }
  }
}


const formInfo = document.forms.change;
const username = document.querySelector('#username');
const about = document.querySelector('#about');
const submitProfile = document.querySelector('#submitProfile');
const words = {
  validationLenght: 'Должно быть от 2 до 30 символов',
  validationRequired: 'Это обязательное поле'
};
const validation = new Validation(words);
username.addEventListener('input', function (event) {
  validation.handleValidate(event.target);
});
about.addEventListener('input', function (event) {
  validation.handleValidate(event.target);
});
submitProfile.addEventListener('click', function (event) {
  event.preventDefault();

  validation.sendForm();

  formInfo.reset();
});
