class Card {
  constructor(api){
    this.api = api;
  }
  like(event) {

    if(event.target.classList.contains('place-card__like-icon')){
      if(!(event.target.classList.contains('place-card__like-icon_liked'))){
        let cardId = event.target.closest('.place-card').id;
        event.target.classList.toggle('place-card__like-icon_liked');
        this.api.putLike(cardId);

      }else if(event.target.classList.contains('place-card__like-icon_liked')){
        let cardIdDelete = event.target.closest('.place-card').id;
        event.target.classList.toggle('place-card__like-icon_liked');
        this.api.deleteLike(cardIdDelete);
      }

  }
}
  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      if(window.confirm("Вы действительно хотите удалить эту карточку?")){
        let cardId = event.target.closest('.place-card').id;
        this.api.deleteCard(cardId)
          .then(result =>{
            document.getElementById(`${cardId}`).remove();
          });
      }
    }
  }

  create(place) {
   const placeCard = document.createElement("div");
   placeCard.classList.add("place-card");
   placeCard.innerHTML = `
    <div class="place-card__image">
    <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
    <h3 class="place-card__name"></h3>
    <div class="place-card__container">
    <button class="place-card__like-icon"></button>
    <p class="place-card__like-checker"></p>
    </div>
    </div>`;
   placeCard.querySelector(".place-card__name").textContent = place.name;
   placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${place.link})`;
   placeCard.querySelector(".place-card__like-checker").textContent = place.likes;
   placeCard.setAttribute('id', `${place.id}`);

   return placeCard;
  }
}

const card = new Card(api);
const place = document.querySelector('.root');
const likeIcon = document.querySelector('.place-card__like-icon');

place.addEventListener('click', function () {
  card.like(event);
});

place.addEventListener('click', function(event){
  card.remove(event);
});
