import { header, footer } from "/modules/ui";
import { getData } from "/modules/https";
import { reload_products } from "../../modules/ui";
import { user } from "/modules/user";

header();
footer();
let log_in_btn = document.querySelector(".log_in_btn");
let log_in_modal = document.querySelector(".log_in_modal");
let log_in_box = document.querySelector(".log_in_box");
let similar_products = document.querySelector(".similar_products");
let favorites_btn = document.querySelector(".favorites_btn");

document.querySelector(".logo").onclick = () => {
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

let id = location.search.split("=").at(-1);
// console.log(id);
let product_imgs = document.querySelector(".product_imgs");
let selected_img = document.querySelector(".selected_img");

getData(`/goods/${id}`).then((res) => {
  let quantity = document.querySelector(".quantity");
  document.querySelector(".title").innerHTML = res.data.title;
  document.querySelector(".prod_type").innerHTML = res.data.type + "/";
  quantity.innerHTML = 1;
  document.querySelector(".monthly_price").innerHTML =
    "От " +
    Math.round((res.data.price * 12) / 100)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
    " руб/мес";
  document.querySelector(".price").innerHTML =
    res.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
  document.querySelector(".prod_name").innerHTML = res.data.title;
  for (let color of res.data.colors) {
    document.querySelector(".color_img").innerHTML = color;
  }
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  if (quantity.innerHTML <= 5) {
    plus.classList.add("text-gray-400");
  }
  plus.onclick = () => {
    quantity.innerHTML += 1;
  };
  if (quantity.innerHTML >= 1) {
    minus.classList.add("text-gray-400");
  }
  minus.onclick = () => {
    quantity.innerHTML -= 1;
  };

  getData("/goods").then((elem) => {
    // console.log(res.data);
    let similars = [];
    // console.log(similars);
    for (let item of elem.data) {
      if (item.type == res.data.type) {
        similars.push(item);
      }
    }
    reload_products(similars, similar_products);
  });

  let img_src = [];
  // console.log(res.data);
  let first_img = document.createElement("img");
  first_img.src = res.data.media[0];
  selected_img.append(first_img);
  for (let img of res.data.media) {
    let img_card = document.createElement("img");
    img_card.src = img;
    // console.log(img_card);
    product_imgs.append(img_card);
    img_card.onclick = (e) => {
      selected_img.innerHTML = "";
      let chosen = document.querySelectorAll(".chosen");
      chosen.forEach((res) => {
        res.classList.remove("chosen");
        res.classList.remove("border");
      });
      e.target.classList.add("border");
      e.target.classList.add("chosen");
      img_src.length = 0;
      img_src.push(e.target.src);
      console.log(img_src);
      let main_img = document.createElement("img");
      main_img.src = img_src[0];
      selected_img.append(main_img);
    };
  }
  // console.log(img_src);
});
