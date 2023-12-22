import {
  reload_favorites,
  reload_products,
  reload_bag_modal,
} from "../../modules/ui";
import { getData, postData } from "/modules/https";
import { header, footer } from "/modules/ui";
import { user } from "/modules/user";

header();
footer();

let logo = document.querySelector(".logo");
let footer_ul = document.querySelectorAll(".footer_ul");
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

footer_ul.forEach((res) => {
  // console.log(res);
  res.onclick = (e) => {
    let opened = document.querySelectorAll(".opened");

    // opened.forEach((res) => {
    //   res.onclick = () => {
    //     res.classList.remove("opened");
    //     res.parentElement.classList.remove("h-[60px]");
    //     res.nextElementSibling.nextElementSibling.classList.add("hidden");
    //     res.nextElementSibling.classList.add("hidden");
    //     for (let child of el.children) {
    //       child.classList.remove("rotate-180");
    //     }
    //   };
    // });

    for (let el of opened) {
      el.classList.remove("opened");
      el.parentElement.classList.remove("h-[60px]");
      el.nextElementSibling.nextElementSibling.classList.add("hidden");
      el.nextElementSibling.classList.add("hidden");
      for (let child of el.children) {
        child.classList.remove("rotate-180");
      }
    }

    res.classList.add("opened");
    e.target.parentElement.classList.add("duration-300");
    e.target.parentElement.classList.add("h-[60px]");
    e.target.nextElementSibling.nextElementSibling.classList.remove("hidden");
    e.target.nextElementSibling.classList.remove("hidden");
    for (let child of e.target.children) {
      child.classList.add("duration-300");
      child.classList.add("rotate-180");
    }
  };
});

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
    // console.log(liked_arr);
  }
  // for()
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
