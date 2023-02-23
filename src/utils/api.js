class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkStatus);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkStatus);
  }

  editProfile({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._checkStatus);
  }

  addCard({ title, link }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: link
      })
    })
      .then(this._checkStatus);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkStatus);
  }

  setLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkStatus);
  }

  removeLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkStatus);
  }

  changeAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkStatus);
  }
}

const api = new Api(
  {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59/',
    headers:
    {
      authorization: '3a443d02-de36-4341-a0dd-9ea01aaea487',
      'Content-Type': 'application/json'
    }
  }
)

export default api;