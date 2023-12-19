import { header, footer } from "/modules/ui";
import { getData } from "/modules/https";
import { reload_products } from "../../modules/ui";

header();
footer();

let product_content = document.querySelector(".product_content");
let searcher_inp = document.querySelector(".searcher_inp");
let min_price = document.querySelector(".min_price");
let max_price = document.querySelector(".max_price");
let log_in_btn = document.querySelector(".log_in_btn");
let prod_num = document.querySelector(".prod_num");
let user = JSON.parse(localStorage.getItem("user")) || [];

if (user.length !== 0) {
  document.querySelector(".log_in_btn p").innerHTML = user.name;
} else {
  document.querySelector(".log_in_btn p").innerHTML = "Войти";
}

searcher_inp.onkeydown = (e) => {
  if (e.key === "Enter") {
    localStorage.removeItem(`searcher_value`);
    localStorage.setItem(`searcher_value`, JSON.stringify(searcher_inp.value));
    location.reload();

    // searcher_inp.value
  }
  // console.log(searcher_inp.value);
};

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

document.querySelector(".logo").onclick = () => {
  location.assign("/");
};
// localStorage.removeItem("searcher_value")

let found_items = [];

let searcher_value = JSON.parse(localStorage.getItem("searcher_value")) || [];

searcher_inp.value = searcher_value;

getData("/goods").then((res) => {
  // console.log(res.data);
  for (let item of res.data) {
    // console.log(searcher_value);
    let item_title = item.title.toLowerCase();
    // console.log(item_title.includes(searcher_value));
    if (item_title.includes(searcher_value)) {
      found_items.push(item);
    }
  }
  prod_num.innerHTML = found_items.length
  reload_products(found_items, product_content);
  //   console.log(found_items);
  let nums = [];
  for (let item of found_items) {
    nums.push(item.price);
    item.price;
  }
  let min_num = Math.min(...nums);
  let max_num = Math.max(...nums);
  min_price.innerHTML = min_num;
  max_price.innerHTML = max_num;
});
