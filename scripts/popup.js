export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }
  openPopup() {
    this.popup.classList.toggle('popup_is-opened');
  }
  closePopup() {
    this.popup.classList.toggle('popup_is-opened', false);
  }
  openProfile() {
    const changeProfileButton = document.querySelector('.change-profile__button');
    let infoName = document.querySelector('.user-info__name');
    let infoJob = document.querySelector('.user-info__job');
    const username = document.querySelector('#username');
    const about = document.querySelector('#about');

    this.popup.classList.toggle('change-profile_is-opened');

    [username.value, about.value] = [infoName.textContent, infoJob.textContent];
  }
  closeProfile() {
    this.popup.classList.toggle('change-profile_is-opened', false);

  }
  openAvatar(){
    this.popup.classList.toggle('popup_is-opened');
  }
  closeAvatar(){
    this.popup.classList.toggle('popup_is-opened', false);
  }
}

import {imageOpened} from './image.js';

export const changeProfile = new Popup(document.querySelector('.change-profile'));
export const popup = new Popup(document.querySelector('.popup'));
export const popupAvatar = new Popup(document.querySelector('.popup-image'));
const openButton = document.querySelector('.user-info__button');
const closeButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.user-info__edit-button');
const changeProfileClose = document.querySelector('.change-profile__close');
const avatarButtonOpen = document.querySelector('.user-info__photo');
const avatarButtonClose = document.querySelector('.popup-image__close');

openButton.addEventListener('click', function () {
  popup.openPopup();
});

closeButton.addEventListener('click', function () {
  popup.closePopup();
});

editButton.addEventListener('click', function () {
  changeProfile.openProfile();
});

changeProfileClose.addEventListener('click', function () {
  changeProfile.closeProfile();
});

avatarButtonOpen.addEventListener('click', function () {
  popupAvatar.openAvatar();
});

avatarButtonClose.addEventListener('click', function () {
  popupAvatar.closeAvatar();
});
