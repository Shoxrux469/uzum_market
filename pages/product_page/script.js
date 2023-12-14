import { header, footer } from "/modules/ui";
import { getData } from "/modules/https";


header();
footer();
let user = JSON.parse(localStorage.getItem("user")) || [];
let log_in_btn = document.querySelector(".log_in_btn");
let log_in_modal = document.querySelector(".log_in_modal");
let log_in_box = document.querySelector(".log_in_box");

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

let id = location.search.split("=").at(-1);
// console.log(id);
let product_imgs = document.querySelector(".product_imgs");
let selected_img = document.querySelector(".selected_img");

getData(`/goods/${id}`).then((res) => {
  let img_src = [];
  for (let img of res.data.media) {
    // console.log(img);
    let img_card = document.createElement("img");
    img_card.src = img;

    product_imgs.append(img_card);
    img_card.onclick = (e) => {
      let chosen = document.querySelectorAll(".chosen");
      chosen.forEach((res) => {
        res.classList.remove("chosen");
        res.classList.remove("border");
      });
      e.target.classList.add("border");
      e.target.classList.add("chosen");
      img_src.push(e.target.src);
      img_src.length = 0;
      //   console.log(img_src);
    };
  }
  let main_img = document.createElement("img");
  console.log(img_src);
  main_img.src = img_src[0];
  selected_img.append(main_img);
});
