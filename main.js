import { getData, postData } from "./modules/https";
import { header, reload_products } from "./modules/ui";
header();
// footer();
let user = JSON.parse(localStorage.getItem("user")) || [];

let show_all_btn = document.querySelector(".show_all_btn");
let furniture_content = document.querySelector(".furniture_content");
let pc_content = document.querySelector(".pc_content");
let techno_content = document.querySelector(".techno_content");
let audio_content = document.querySelector(".audio_content");
let kitchen_content = document.querySelector(".kitchen_content");
let log_in_btn = document.querySelector(".log_in_btn");
let footer_ul = document.querySelectorAll(".footer_ul");

footer_ul.forEach((res) => {
  console.log(res);
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
    res.parentElement.classList.add("duration-300");
    e.target.parentElement.classList.add("h-[60px]");
    e.target.nextElementSibling.nextElementSibling.classList.remove("hidden");
    e.target.nextElementSibling.classList.remove("hidden");

    for (let child of e.target.children) {
      child.classList.add("duration-300");
      child.classList.add("rotate-180");
    }
  };
});

let discounts_content = document.querySelector(".discounts_content");
let discount_box = [];

let close_modal_btn = document.querySelector(".close_modal_btn");
let log_in_modal = document.querySelector(".log_in_modal");
let log_in_box = document.querySelector(".log_in_box");
let open_sign_in = document.querySelector(".open_sign_in");
let open_log_in = document.querySelector(".open_log_in");
let sign_in_form = document.querySelector(".sign_in_form");
let log_in_form = document.querySelector(".log_in_form");
let modal_title = document.querySelector(".modal_title");

if (user.length !== 0) {
  document.querySelector(".log_in_btn p").innerHTML = user.name;
} else {
  document.querySelector(".log_in_btn p").innerHTML = "Войти";
}

// localStorage.removeItem("user")

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

close_modal_btn.onclick = () => {
  log_in_modal.classList.add("hidden");
  log_in_modal.classList.remove("block");
  log_in_box.classList.remove("opacity-100");
  log_in_box.classList.add("opacity-0");
};

open_sign_in.onclick = () => {
  log_in_form.classList.add("hidden");
  sign_in_form.classList.add("block");
  sign_in_form.classList.remove("hidden");
  modal_title.innerHTML = "Зарегистрироваться";
};

open_log_in.onclick = () => {
  sign_in_form.classList.add("hidden");
  log_in_form.classList.add("block");
  log_in_form.classList.remove("hidden");
  modal_title.innerHTML = "Войти в аккаунт";
};

log_in_form.onsubmit = (e) => {
  e.preventDefault();

  let user = {};
  // console.log(user);

  let fm = new FormData(log_in_form);

  fm.forEach((value, key) => {
    user[key] = value;
  });

  getData(`/users?phone_num=` + user.phone_num).then((res) => {
    if (!res) return;
    if (res.status !== 200 && res.status !== 201) {
      console.log("this acc does not exist");
      return;
    }
    if (res.data.length === 0) {
      console.log("Этот номер не найден");
      document.querySelector(".phone_num_log_in").classList.add("border-2");
      document
        .querySelector(".phone_num_log_in")
        .classList.add("border-red-600");
      return;
    } else {
      document.querySelector(".phone_num_log_in").classList.remove("border-2");
    }

    let password_log_in = document.querySelector(".password_log_in");

    let [res_user] = res.data;

    if (password_log_in.value.length === 0) {
      alert("Введите пароль");
      password_log_in.classList.add("border-2");
      password_log_in.classList.add("border-red-600");
      return;
    } else {
    }

    if (+res_user.password !== +user.password) {
      alert("Неправильный пароль");
      document.querySelector(".password_log_in").classList.add("border-2");
      document
        .querySelector(".password_log_in")
        .classList.add("border-red-600");
    } else {
      delete res_user.password;
      document.querySelector(".password_log_in").classList.remove("border-2");
    }
    // console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res_user));
    log_in_modal.classList.add("hidden");
    location.reload();
  });
};

sign_in_form.onsubmit = (e) => {
  e.preventDefault();

  let user = {};

  let fm = new FormData(sign_in_form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);

  getData("/users?phone_num=" + user.phone_num).then((res) => {
    // console.log(res);
    if (res.status !== 200 && res.status !== 201) return;
    if (res.data.length > 0) {
      alert("account already taken!");
      return;
    }

    postData("/users", user).then((res) => {
      if (res.status === 200 || res.status === 201) {
        log_in_modal.classList.add("hidden");
        localStorage.setItem("user", JSON.stringify(res.data));
        location.reload();
      }
    });
  });
};

getData("/goods").then((res) => {
  // console.log(res.data);
  for (let item of res.data) {
    let shown_num = 15;

    if (item.isBlackFriday == true) {
      discount_box.push(item);
      reload_products(discount_box.slice(0, shown_num), discounts_content);
      show_all_btn.onclick = () => {
        if (shown_num === 15) {
          shown_num = 17;
          reload_products(discount_box.slice(0, shown_num), discounts_content);
        } else if (shown_num === 17) {
          shown_num = 15;
          reload_products(discount_box.slice(0, shown_num), discounts_content);
        }
      };
    }
  }
});

let furniture_box = [];
getData("/goods").then((res) => {
  for (let item of res.data) {
    // console.log(item);
    if (item.type === "furniture") {
      furniture_box.push(item);
      reload_products(furniture_box, furniture_content);
    }
  }
});

let pc_box = [];
getData("/goods").then((res) => {
  for (let item of res.data) {
    // console.log(item);
    if (item.type === "PC") {
      pc_box.push(item);
      reload_products(pc_box, pc_content);
    }
  }
});

let techno_box = [];
getData("/goods").then((res) => {
  for (let item of res.data) {
    // console.log(item);
    if (item.type === "TV") {
      // console.log(item);
      techno_box.push(item);
      reload_products(techno_box, techno_content);
    }
  }
});

let audio_box = [];
getData("/goods").then((res) => {
  for (let item of res.data) {
    // console.log(item);
    if (item.type === "audio") {
      // console.log(item);
      audio_box.push(item);
      reload_products(audio_box, audio_content);
    }
  }
});

let kitchen_box = [];
getData("/goods").then((res) => {
  for (let item of res.data) {
    // console.log(item);
    if (item.type === "kitchen") {
      // console.log(item);
      kitchen_box.push(item);
      reload_products(kitchen_box, kitchen_content);
    }
  }
});

let mySwiper = new Swiper(".swiper", {
  // Опции (по желанию)
  slidesPerView: 1, // Количество видимых слайдов
  spaceBetween: 10, // Расстояние между слайдами
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  speed: 400,
});

const swiper = document.querySelector(".swiper").swiper;

swiper.slideNext();
