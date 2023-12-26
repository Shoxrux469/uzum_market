import { header, footer, modal_container } from "/modules/ui";
import { reload_bag_prods, reload_favorites } from "../../modules/ui";
import { getData, postData } from "/modules/https";
import { user } from "/modules/user";

header();
footer();
modal_container();

let main_page_btn = document.querySelector(".main_page_btn");
let swiper_wrapper = document.querySelector(".swiper-wrapper");
let bag_btn = document.querySelector(".bag_btn");
let inner_content = document.querySelector(".inner_content");
let prod_container = document.querySelector(".prod_container");
let prod_content = document.querySelector(".prod_content");
let delivery_date = document.querySelectorAll(".delivery_date");
let prod_number = document.querySelector(".prod_number");
let general_sum = document.querySelector(".general_sum");
let real_sum = document.querySelectorAll(".real_sum");
let prod_num = document.querySelector(".prod_num");
let saved_money = document.querySelector(".saved_money");
let checkout_btn = document.querySelector(".checkout_btn");
let bag_arr = [];

const currentDate = new Date();

checkout_btn.onclick = () => {
  location.assign("/pages/order_prod/");
};

const tomorrowDate = new Date();
tomorrowDate.setDate(currentDate.getDate() + 1);
const tomorrowDateFormat = tomorrowDate.toDateString();
let real_price = [];

getData("/bag").then((bag) => {
  getData("/goods").then((goods) => {
    for (let item of bag.data) {
      if (bag.data.length > 0) {
        inner_content.classList.add("hidden");
        prod_container.classList.remove("hidden");
      } else {
        inner_content.classList.remove("hidden");
        prod_container.classList.add("hidden");
      }
      for (let good of goods.data) {
        if (item.prod_id === good.id) {
          bag_arr.push(good);
          // console.log(bag_arr);
        }
      }
    }
    // console.log(bag_arr);
    for (let item of bag_arr) {
      delivery_date.forEach((date) => {
        date.innerHTML = "Доставка " + tomorrowDateFormat + " (Завтра)";
      });
      console.log(bag_arr);
      real_price.push(
        (item.price - Math.floor((item.price * item.salePercentage) / 100))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      );
    }
    let totalSum = bag_arr.reduce((sum, product) => sum + product.price, 0);
    general_sum.innerHTML =
      totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    prod_number.innerHTML = `(${bag_arr.length}):`;

    if (bag_arr.length === 1) {
      prod_num.innerHTML = bag_arr.length + " товар";
    } else if (bag_arr.length < 5 && bag_arr.length > 1) {
      prod_num.innerHTML = bag_arr.length + " товара";
    } else {
      prod_num.innerHTML = bag_arr.length + " товаров";
    }

    let realtotalSum = real_price.reduce((sum, priceString) => {
      // Remove spaces from the string and convert to a number
      let price = parseFloat(priceString.replace(/\s/g, ""));

      // Add the price to the sum
      return sum + price;
    }, 0);

    real_sum.forEach((sum) => {
      sum.innerHTML =
        realtotalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    });

    saved_money.innerHTML =
      (totalSum - realtotalSum)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    reload_bag_prods(bag_arr, prod_content);
  });
  // let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
});

main_page_btn.onclick = () => {
  location.assign("/");
};

bag_btn.onclick = () => {
  location.assign("/pages/bag_page/");
};

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
