class Avatar{
  constructor(api){
    this.api = api;
  }

  updateAvatar(event){
    let link = {
      avatar: `${linkAvatar.value}`
    };
    this.api.changeAvatar(link)
      .then(result => {
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${result.avatar})`;
      });
    popupAvatar.closeAvatar();
  }
}

const avatar = new Avatar(api);
