import { header, footer, modal_container } from "/modules/ui";
import { getData, postData, editData } from "/modules/https";
import { reload_products } from "../../modules/ui";
import { user } from "/modules/user";

header();
footer();
modal_container();
let similar_products = document.querySelector(".similar_products");

let id = location.search.split("=").at(-1);
let product_imgs = document.querySelector(".product_imgs");
let selected_img = document.querySelector(".selected_img");
let add_to_bag = document.querySelectorAll(".add_to_bag");

add_to_bag.forEach((btn) => {
  btn.onclick = () => {
    let bag_obj = {
      prod_id: id,
      num: 1,
    };
    btn.innerHTML = "Добавлено в карзину";
    getData("/bag").then((res) => {
      // console.log(res.data);
      let doesExist = res.data.filter((el) => +el.prod_id === +id);
      console.log(doesExist.length);
      for (let item of res.data) {
        if (doesExist.length === 1) {
          let new_item = (item.num += 1);
          editData("/bag/" + item.id, { num: new_item }).then((res) => {
            if (res.status !== 200 && res.status !== 201) return;
            console.log(res.data);
          });
        } else {
          console.log(item.prod_id);
          console.log(id);
          postData("/bag", bag_obj).then((res) => {
            setTimeout(() => {
              location.reload();
            }, 3000);
          });
        }
      }
    });
  };
});

const prod_price = document.querySelector(".prod_price");
const price = document.querySelector(".price");

getData(`/goods/${id}`).then((res) => {
  let quantity = document.querySelector(".quantity");
  prod_price.innerHTML =
    res.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
  document.querySelector(".title").innerHTML = res.data.title;
  document.querySelector(".prod_type").innerHTML = res.data.type + "/";
  quantity.innerHTML = 1;
  document.querySelector(".monthly_price").innerHTML =
    "От " +
    Math.round((res.data.price * 12) / 100)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
    " руб/мес";
  price.innerHTML =
    res.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
  document.querySelector(".prod_name").innerHTML = res.data.title;
  document.querySelector(".modal_price").innerHTML =
    "от " +
    res.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
    " руб/ед";

  for (let color of res.data.colors) {
    document.querySelector(".color_img").innerHTML = color;
  }

  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  minus.onclick = () => {
    if (quantity.innerHTML > 1) {
      quantity.innerHTML--;
      price.innerHTML =
        (res.data.price * quantity.innerHTML)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "руб";
      // console.log(res.data.price);
    } else {
      minus.classList.add("text-gray-400");
    }
  };
  plus.onclick = () => {
    if (quantity.innerHTML >= 5) {
      plus.classList.add("text-gray-400");
    } else {
      quantity.innerHTML++;
      price.innerHTML =
        (res.data.price * quantity.innerHTML)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "руб";
    }
  };
  getData("/goods").then((elem) => {
    let similars = [];

    for (let item of elem.data) {
      if (item.type == res.data.type && res.data.id !== item.id) {
        similars.push(item);
      }
    }
    reload_products(similars, similar_products);
  });

  let img_src = [];

  let first_img = document.createElement("img");
  first_img.src = res.data.media[0];
  selected_img.append(first_img);

  for (let img of res.data.media) {
    let img_card = document.createElement("img");
    img_card.src = img;
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
});
