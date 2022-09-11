import "./index.html";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import $ from "jquery";

import { cardLarge } from "./utils/constans";

const dateText = document.querySelector(".hero__form-value_type_date");
const calendar = document.querySelector(".hero__calendar");
const cardLargeContainer = document.querySelector('.tour__slider');
const cardTemplate = document.querySelector('#card-large').content;

const locationTitle = document.querySelector('.hero__form-title_type_location');
const locationInput = document.querySelector('.hero__form-location');
const locationButton = document.querySelector('.hero__button-ok');
const locationParagraph = document.querySelector('.hero__form-value_type_location');


const visibleLocationForm = () => {
  locationInput.classList.toggle('hero__form-location_active');
  locationButton.classList.toggle('hero__button-ok_active')
}

locationInput.addEventListener("input", (e) => {
  const value = e.target.value;
  locationInput.setAttribute("value", value)
  console.log(value)
}, { passive: true });


const setParagraphText = () => {
  locationInput.classList.remove('hero__form-location_active');
  locationButton.classList.remove('hero__button-ok_active');
  locationParagraph.textContent = locationInput.value || 'Russia';
}


locationTitle.addEventListener('click', visibleLocationForm, { passive: true })

locationButton.addEventListener('click', setParagraphText, { passive: true })

const date = new Date();
const currentDate = date.toISOString().substring(0, 10);

const setDate = (currentDate) => {
  const date = new Date(currentDate)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");
  calendar.setAttribute("value", currentDate);
  dateText.textContent = date;
};

setDate(currentDate);

calendar.addEventListener("change", (e) => setDate(e.target.value), { passive: true });

cardLarge.forEach(({ title, image, country, rate, price, days }) => {
  const cardBody = cardTemplate.querySelector('.card-large').cloneNode(true);
  const titleCard = cardBody.querySelector('.card-large__title');
  const imgCard = cardBody.querySelector('.card-large__img');
  const locationCard = cardBody.querySelector('.card-large__location');
  const rateCard = cardBody.querySelector('.card-large__rating-number');
  const priceCard = cardBody.querySelector('.card-large__price');
  const daysCard = cardBody.querySelector('.card-large__duration');
  titleCard.textContent = title;
  locationCard.textContent = country;
  rateCard.textContent = `${rate.toFixed(1)}`;
  priceCard.textContent = `$${price} `;
  daysCard.textContent = `${days} days tour`;
  imgCard.setAttribute('src', image);
  imgCard.setAttribute('alt', title);
  cardLargeContainer.append(cardBody);
}
)



$(".tour__slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".tour__button_type_left"),
  nextArrow: $(".tour__button_type_right"),
});

$(".testimonial__list").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".testimonial__button-left"),
  nextArrow: $(".testimonial__button-right"),
});




