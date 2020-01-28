export default class Avatar{
  constructor(api, popupAvatar){
    this.api = api;
    this.popupAvatar = popupAvatar;
  }

  updateAvatar(event){
    let link = {
      avatar: `${linkAvatar.value}`
    };
    this.api.changeAvatar(link)
      .then(result => {
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${result.avatar})`;
      });
    this.popupAvatar.closeAvatar();
  }
}

import Popup from './popup.js';
import {api} from './api.js';

let popupAvatar = new Popup(document.querySelector('.popup-image'));
 export const avatar = new Avatar(api, popupAvatar);
