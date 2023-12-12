import { header, footer } from "/modules/ui";
import { getData, postData, editData } from "/modules/https";

header();
footer();
let user = JSON.parse(localStorage.getItem("user")) || [];
// console.log(user.);

let profile_info = document.forms.profile_info;
document.querySelector(".surname").value = user.surname;
document.querySelector(".name").value = user.name;
document.querySelector(".email").value = user.email;
document.querySelector(".phone_num").value = user.phone_num;
document.querySelector(".logo").onclick = () => {
  location.assign("/");
};

let my_orders_btn = document.querySelector(".my_orders_btn");
let settings_btn = document.querySelector(".settings_btn");
let settings = document.querySelector(".settings");
let my_orders = document.querySelector(".my_orders");
let sex_btns = document.querySelectorAll(".sex_btns button");

sex_btns.forEach((res) => {
  res.onclick = () => {
    let chosen = document.querySelectorAll(".chosen");
    for (let item of chosen) {
      item.classList.remove("chosen");
      item.classList.remove("bg-gray-200");
    }
    res.classList.add("chosen");
    res.classList.add("bg-gray-200");
  };
});

settings_btn.onclick = () => {
  settings_btn.classList.remove("text-[rgba(54,54,64,.35)]");
  settings_btn.classList.add("text-[#1f2026]");
  my_orders_btn.classList.remove("text-[#1f2026]");
  my_orders_btn.classList.add("text-[rgba(54,54,64,.35)]");
  my_orders.classList.add("hidden");
  settings.classList.remove("hidden");
};
my_orders_btn.onclick = () => {
  my_orders_btn.classList.remove("text-[rgba(54,54,64,.35)]");
  my_orders_btn.classList.add("text-[#1f2026]");
  settings_btn.classList.remove("text-[#1f2026]");
  settings_btn.classList.add("text-[rgba(54,54,64,.35)]");
  settings.classList.add("hidden");
  my_orders.classList.remove("hidden");
};

profile_info.onsubmit = (e) => {
  e.preventDefault();

  let chosen = document.querySelector(".chosen") || "";

  let user_arr = {
    gender: chosen.innerHTML || "",
  };

  let fm = new FormData(profile_info);

  fm.forEach((value, key) => {
    user_arr[key] = value;
  });
  if (user_arr.phone_num.length === 0) {
    document.querySelector(".phone_num").classList.add("border-2");
    document.querySelector(".phone_num").classList.add("border-red-400");
    alert("Укажите номер телефона пожалуйста!");
    return;
  } else if (user_arr.phone_num !== user.phone_num) {
    getData("/users?phone_num=" + user_arr.phone).then((res) => {
    //   console.log(res.data);
      if (res.data.length > 0) {
        document.querySelector(".phone_num").classList.add("border-2");
        document.querySelector(".phone_num").classList.add("border-red-400");
        alert("Аккаунт с таким номером уже существует");
        return;
      } else {
        document.querySelector(".phone_num").classList.remove("border-2");
        document.querySelector(".phone_num").classList.remove("border-red-400");
        getData("/users?phone_num=" + user.phone_num).then((res) => {
          for (let item of res.data) {
            console.log(item);
            // editData('/users?phone_num=' + item.phone_num, {
            //   name: user_arr.name,
            //   surname: user_arr.surname,
            //   phone_num: user_arr.phone_num,
            //   email: user_arr.email,
            //   middle_name: user_arr.middle_name,
            //   gender: user_arr.gender,
            //   birthday: user_arr.birthday,
            // })
            // .then(res => {
            //     if(res.status !== 200 && res.status !== 201) return
            // })
          }
        });
      }
    });
  }
};
