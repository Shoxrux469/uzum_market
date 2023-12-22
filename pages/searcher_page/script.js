import { header, footer } from "/modules/ui";
import { getData } from "/modules/https";
import { reload_products } from "../../modules/ui";
import { user } from "/modules/user";

header();
footer();

let product_content = document.querySelector(".product_content");
let searcher_inp = document.querySelector(".searcher_inp");
let min_price = document.querySelector(".min_price");
let max_price = document.querySelector(".max_price");
let prod_num = document.querySelector(".prod_num");

searcher_inp.onkeydown = (e) => {
  if (e.key === "Enter") {
    localStorage.removeItem(`searcher_value`);
    localStorage.setItem(`searcher_value`, JSON.stringify(searcher_inp.value));
    location.reload();

    // searcher_inp.value
  }
  // console.log(searcher_inp.value);
};
let found_items = [];

let searcher_value = JSON.parse(localStorage.getItem("searcher_value")) || [];

searcher_inp.value = searcher_value;

getData("/goods").then((res) => {
  for (let item of res.data) {

    let item_title = item.title.toLowerCase();
    if (item_title.includes(searcher_value)) {
      found_items.push(item);
    }
  }
  prod_num.innerHTML = found_items.length;
  reload_products(found_items, product_content);

  let nums = [];

  for (let item of found_items) {
    let salePrice =
      item.price - Math.floor((item.price * item.salePercentage) / 100);

    nums.push(salePrice);
  }

  let min_num = Math.min(...nums);
  let max_num = Math.max(...nums);

  min_price.innerHTML = min_num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  max_price.innerHTML = max_num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});
