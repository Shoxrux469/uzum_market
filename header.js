import { getData } from "./modules/https";
import { reload_bag_modal } from "./modules/ui";
import { user } from "/modules/user";

let bag_modal = document.querySelector(".bag_modal");
let bag_main_modal = document.querySelector(".bag_main_modal");
let bag_main_btn = document.querySelector(".bag_main_btn");
let prod_quantity = document.querySelector(".prod_quantity");
let logo = document.querySelector(".logo");
let searcher_inp = document.querySelector(".searcher_inp");
let favorites_btn = document.querySelector(".favorites_btn");
let log_in_btn = document.querySelector(".log_in_btn");
let log_in_modal = document.querySelector(".log_in_modal");
let log_in_box = document.querySelector(".log_in_box");
let footer_ul = document.querySelectorAll(".footer_ul");

logo.onclick = () => {
  location.assign("/");
};
if (bag_main_btn) {
  bag_main_btn.onclick = (e) => {
    console.log(e.target);
    if (e.target.classList[0] == "bag_btn") {
      location.assign("/pages/bag_page/");
    }
  };
}

if (favorites_btn) {
  favorites_btn.onclick = () => {
    location.assign("/pages/favorites_page/");
  };
}
bag_main_btn.onmouseenter = () => {
  bag_main_modal.classList.remove("hidden");
  bag_main_modal.onmouseenter = () => {
    bag_main_modal.classList.remove("hidden");
  };
};
bag_main_btn.onmouseleave = () => {
  bag_main_modal.classList.add("hidden");
};
bag_main_modal.onmouseleave = () => {
  bag_main_modal.classList.add("hidden");
};

getData("/bag").then((res) => {
  let bag_arr = [];
  for (let item of res.data) {
    // console.log(item);
    getData("/goods").then((res) => {
      for (let good of res.data) {
        if (good.id === item.prod_id) {
          bag_arr.push(good);
        }
      }
      reload_bag_modal(bag_arr, bag_modal);
    });
  }
});

getData("/bag").then((res) => {
  if (res.data.length === 0) {
    prod_quantity.classList.add("hidden");
  } else {
    prod_quantity.classList.remove("hidden");
    prod_quantity.innerHTML = res.data.length;
  }
});

searcher_inp.onkeydown = (e) => {
  if (e.key === "Enter") {
    localStorage.setItem(`searcher_value`, JSON.stringify(searcher_inp.value));
    location.assign("/pages/searcher_page/");
  }
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

footer_ul.forEach((res) => {
  res.onclick = (e) => {
    let opened = document.querySelectorAll(".opened");

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
