import { getData } from "./modules/https";
import { header, footer, reload_products } from "./modules/ui";
header();
footer();

let show_all_btn = document.querySelector(".show_all_btn");
let furniture_content = document.querySelector(".furniture_content");
let pc_content = document.querySelector(".pc_content");
let techno_content = document.querySelector(".techno_content");
let audio_content = document.querySelector(".audio_content");
let kitchen_content = document.querySelector(".kitchen_content");
let log_in_btn = document.querySelector(".log_in_btn");
// console.log(log_in_btn);
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

log_in_btn.onclick = () => {
  log_in_modal.classList.remove("hidden");
  log_in_modal.classList.add("block");
  log_in_box.classList.add("opacity-100");
  log_in_box.classList.remove("opacity-0");
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

  Promise.all([
    getData(`/users?phone_num=` + user.phone_num),
    getData(`'/users?password=` + user.password),
  ]).then(([phone_num, password]) => {
    console.log(password, phone_num);
    if (!phone_num || !password) return;
    if (phone_num !== 200 && phone_num !== 201) return;
    if (password !== 200 && password !== 201) return;

    if(phone_num.data.length === 0 || password.data.length === 0) {
      console.log('error');
      return
    }

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
