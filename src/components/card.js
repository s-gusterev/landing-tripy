export default class Card {
  constructor(data, template) {
    this._cardTemplate = document.querySelector(template).content;
    this._title = data.title;
    this._country = data.country;
    this._rate = data.rate;
    this._price = data.price;
    this._days = data.days;
  }



  // Шаблон карточки
  getCard() {
    this._cardBody = this._cardTemplate.querySelector('.card-large').cloneNode(true);
    this._cardTitle = this._cardBody.querySelector('.card-large__title');
    this._cardImg = this._cardBody.querySelector('.card-large__img');
    this._cardLocation = this._cardBody.querySelector('.card-large__location');
    this._cardPrice = this._cardBody.querySelector('.card-large__price');
    this._cardRate = this._cardBody.querySelector('.card-large__rating-number');
    this._cardDays = this._cardBody.querySelector('.card-large__duration');
    this._cardTitle.textContent = this._title;
    this._cardLocation.textContent = this._country;
    this._cardPrice.textContent = `$${this._price}`;
    this._cardRate.textContent = this._rate;
    this._cardDays.textContent = `${this._days} days tour`;
    this._cardImg.setAttribute('src', this._link);
    this._cardImg.setAttribute('alt', this._name);

    return this._cardBody;
  }
}
