import {
  reload_favorites,
} from "../../modules/ui";
import { getData, postData } from "/modules/https";
import { header, footer } from "/modules/ui";

header();
footer();

let logo = document.querySelector(".logo");
let swiper_wrapper = document.querySelector(".swiper-wrapper");
let main_page_btn = document.querySelector(".main_page_btn");
let bag_btn = document.querySelector(".bag_btn");
let container = document.querySelector(".container");
let prod_container = document.querySelector(".prod_container");

main_page_btn.onclick = () => {
  location.assign("/");
};

bag_btn.onclick = () => {
  location.assign("/pages/bag_page/");
};

logo.onclick = () => {
  location.assign("/");
};

getData("/liked").then((res) => {
  let liked_arr = [];
  // console.log(res.data);
  if (res.data.length === 0) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
    for (let liked of res.data) {
      getData("/goods").then((res) => {
        for (let good of res.data) {
          if (good.id === liked.prod_id) {
            // reload_favorites()
            liked_arr.push(good);
            reload_favorites(liked_arr, prod_container);
          }
        }
      });
    }
  }
});


let furniture_box = [];
getData("/goods").then((res) => {
  for (let item of res.data) {
    // console.log(item);
    if (item.type === "furniture") {
      furniture_box.push(item);
      reload_favorites(furniture_box, swiper_wrapper);
    }
  }
});

let mySwiper = new Swiper(".swiper", {
  // Опции (по желанию)
  slidesPerView: 5, // Количество видимых слайдов
  spaceBetween: 10, // Расстояние между слайдами
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = document.querySelector(".swiper").swiper;

swiper.slideNext();
