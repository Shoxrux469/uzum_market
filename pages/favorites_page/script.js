import { reload_favorites } from "../../modules/ui";
import { getData, postData } from "/modules/https";
import { header, footer } from "/modules/ui";
import { user } from "/modules/user";

header();
footer();

let logo = document.querySelector(".logo");
let searcher_inp = document.querySelector(".searcher_inp");
let footer_ul = document.querySelectorAll(".footer_ul");
let favorites_btn = document.querySelector(".favorites_btn");
let swiper_wrapper = document.querySelector(".swiper-wrapper");
let log_in_btn = document.querySelector(".log_in_btn");
let main_page_btn = document.querySelector(".main_page_btn");
let log_in_modal = document.querySelector(".log_in_modal");
let bag_btn = document.querySelector(".bag_btn");
let log_in_box = document.querySelector(".log_in_box");

main_page_btn.onclick = () => {
  location.assign('/')
}


bag_btn.onclick = () => {
  location.assign("/pages/bag_page/");
};


logo.onclick = () => {
  location.assign("/");
};

if (user.length !== 0) {
  document.querySelector(".log_in_btn p").innerHTML = user.name;
} else {
  document.querySelector(".log_in_btn p").innerHTML = "Войти";
}

log_in_btn.onclick = () => {
  if (user.length === 0) {
    log_in_modal.classList.remove("hidden");
    log_in_modal.classList.add("block");
    log_in_box.classList.add("opacity-100");
    log_in_box.classList.remove("opacity-0");
  } else {
    location.assign("/pages/profile/");
  }
};

favorites_btn.onclick = () => {
  location.assign("/pages/favorites_page/");
};

searcher_inp.onkeydown = (e) => {
  if (e.key === "Enter") {
    localStorage.setItem(`searcher_value`, JSON.stringify(searcher_inp.value));
    location.assign("/pages/searcher_page/");
    // searcher_inp.value
  }
  // console.log(searcher_inp.value);
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
