import "./index.html";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import $ from "jquery";

const dateText = document.querySelector(".hero__form-value_type_date");
const calendar = document.querySelector(".hero__calendar");

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

calendar.addEventListener("change", (e) => setDate(e.target.value));

$(".tour__slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".tour__button-left"),
  nextArrow: $(".tour__button-right"),
});

$(".testimonial__list").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".testimonial__button-left"),
  nextArrow: $(".testimonial__button-right"),
  // variableWidth: true,
  // centerMode: true,
  // centerPadding: 0,
});
