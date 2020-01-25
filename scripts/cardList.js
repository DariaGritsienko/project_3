class CardList {
  constructor(place, card, api) {
    this.card = card;
    this.api = api;
    this.place = place;
  }
  addCard(event) {
    const { name, link } = event.currentTarget.elements;
    const info = {
      name: `${name.value}`,
      link: `${link.value}`
    }
    this.api.postCard(info)
      .then(result => {
        const info = {name:result.name, link:result.link, likes:0, id:result._id};
        this.place.appendChild(this.card.create(info));
      });
    popup.closePopup();
  }
  render(array) {
    for (const elem of array) {
      const info = {name:elem.name, link:elem.link, likes:elem.likes.length, id:elem._id};
      this.place.appendChild(this.card.create(info));
    }
  }
}

const placesList = new CardList(document.querySelector(".places-list"), card, api);
