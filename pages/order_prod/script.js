import { getData } from "../../modules/https";
import { reload_bag_modal, reload_bag_prods } from "../../modules/ui";
import { user } from "/modules/user";
import { footer, modal_container } from "/modules/ui";

footer();
modal_container()

let user_name = document.querySelector(".user_name");
let bag_prods = document.querySelector(".bag_prods");
let switcher = document.querySelector(".switcher");
let arrow_bottom = document.querySelector(".arrow_bottom");
let prods_num = document.querySelector(".prods_num");
let go_to_bag = document.querySelector(".go_to_bag");
let prod_quantity = document.querySelector(".prod_quantity");
let surname = document.querySelector(".surname");
let name = document.querySelector(".name");
let phone_num = document.querySelector(".phone_num");
let prod_sum = document.querySelectorAll(".prod_sum");
let bag_arr = [];
let real_price = [];

surname.value = user.surname
name.value = user.name
phone_num.value = user.phone_num

go_to_bag.onclick = () => {
    location.assign('/pages/bag_page/')
}

prod_quantity.classList.add('hidden')

user_name.innerHTML = user.name.slice(0, 1) + ". " + user.surname;

switcher.onclick = (e) => {
  if (e.target.classList.contains("opened")) {
    bag_prods.classList.add("hidden");
    switcher.classList.remove("opened");
    arrow_bottom.classList.add("rotate-0");
    arrow_bottom.classList.remove("rotate-180");
    arrow_bottom.classList.add("duration-200");
  } else {
    switcher.classList.add("opened");
    bag_prods.classList.remove("hidden");
    arrow_bottom.classList.add("rotate-180");
    arrow_bottom.classList.remove("rotate-0");
    arrow_bottom.classList.add("duration-200");
  }
};

getData("/bag").then((bag) => {
  getData("/goods").then((goods) => {
    for (let prod of bag.data) {
      for (let good of goods.data) {
        if (prod.prod_id === good.id) {
          bag_arr.push(good);
        }
      }
    }
    for (let item of bag_arr) {
      console.log(item);
      real_price.push(
        (item.price - Math.floor((item.price * item.salePercentage) / 100))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      );
    }

    let realtotalSum = real_price.reduce((sum, priceString) => {
      // Remove spaces from the string and convert to a number
      let price = parseFloat(priceString.replace(/\s/g, ""));

      // Add the price to the sum
      return sum + price;
    }, 0);

    prod_sum.forEach((prod) => {
      prod.innerHTML =
        realtotalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    });
    prods_num.innerHTML = `(${bag_arr.length}):`

    reload_bag_prods(bag_arr, bag_prods);
  });
});
