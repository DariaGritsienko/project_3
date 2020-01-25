class Api {
  constructor(options) {
    this.options = options;
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: {
        authorization: `${this.options.headers.authorization}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        authorization: `${this.options.headers.authorization}`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        document.querySelector('.user-info__name').textContent = result.name;
        document.querySelector('.user-info__job').textContent = result.about;
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${result.avatar})`;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  patchProfile(info) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify(info)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        document.querySelector('.user-info__name').textContent = result.name;
        document.querySelector('.user-info__job').textContent = result.about;

      })
      .catch((err) => {
    	   console.log(err);
    	});
  }

  postCard(info) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify(info)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
     	   console.log(err);
     	});
  }

  deleteCard(cardId) {
    return fetch(`${this.options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this.options.headers.authorization}`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(error => console.log(error));
  }

  putLike(cardId) {
    return fetch(`${this.options.baseUrl}/cards/like/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: `${this.options.headers.authorization}`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        let elem = document.getElementById(`${cardId}`);
        document.getElementById(`${cardId}`)
          .querySelector('.place-card__like-checker')
            .textContent  = `${result.likes.length}`;
      })
      .catch(error => console.log(error));
  }

  deleteLike(cardId) {
    return fetch(`${this.options.baseUrl}/cards/like/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this.options.headers.authorization}`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        let elem = document.getElementById(`${cardId}`);
        document.getElementById(`${cardId}`)
          .querySelector('.place-card__like-checker')
            .textContent  = `${result.likes.length}`;
      })
      .catch(error => console.log(error));
  }
  changeAvatar(info){
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify(info)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
    	   console.log(err);
    	});
  }

}
const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort6',
  headers: {
    authorization: '7935ab21-777e-4b7a-aed5-8f3dc30b0a17',
    'Content-Type': 'application/json'
  }
});
const form = document.forms.new;

api.getInfo();

api.getInitialCards()
  .then((res) => {
     res.forEach(result => placesList.render([result]));
  })
  .catch(err => console.log(err))

form.addEventListener('submit', function (event) {
  event.preventDefault();

  placesList.addCard(event);

  form.reset();
});
