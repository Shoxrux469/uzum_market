import { header, footer } from "/modules/ui";
import { getData, postData, editData } from "/modules/https";
import { user } from "/modules/user";

header();
footer();
// console.log(user.);

// loader()

let profile_info = document.forms.profile_info;
document.querySelector(".surname").value = user.surname || [];
document.querySelector(".name").value = user.name || [];
document.querySelector(".email").value = user.email || [];
document.querySelector(".phone_num").value = user.phone_num || [];
document.querySelector(".birthday").value = user.birthday || [];
document.querySelector(".middle_name").value = user.middle_name || [];

let my_orders_btn = document.querySelector(".my_orders_btn");
let settings_btn = document.querySelector(".settings_btn");
let settings = document.querySelector(".settings");
let my_orders = document.querySelector(".my_orders");
let sex_btns = document.querySelectorAll(".sex_btns button");
let all_orders = document.querySelector(".all_orders");
let active_orders = document.querySelector(".active_orders");
let btns = document.querySelectorAll(".btns button");
let searcher_inp = document.querySelector(".searcher_inp");
let favorites_btn = document.querySelector(".favorites_btn");
let log_out = document.querySelector(".log_out");

log_out.onclick = () => {
  localStorage.removeItem('user')
  location.reload()
  location.assign('/')
}

// if (user.gender == "Мужской") {
//   document.querySelector(".male").classList.add("bg-gray-200");
// } else if(user.gender == "Женский") {
//   document.querySelector(".female").classList.add("bg-gray-200");
// } else {
//   sex_btns.forEach(res => {
//     res.classList.remove("chosen");
//     res.classList.remove("bg-gray-200");
//   })
// }

document.querySelector(".logo").onclick = () => {
  location.assign("/");
};

favorites_btn.onclick = () => {
  location.assign("/pages/favorites_page/");
};

if (user.length !== 0) {
  document.querySelector(".log_in_btn p").innerHTML = user.name;
} else {
  document.querySelector(".log_in_btn p").innerHTML = "Войти";
}

let start_shopping = document.querySelectorAll(".start_shopping");
start_shopping.forEach((res) => {
  res.onclick = () => {
    location.assign("/");
  };
});

searcher_inp.onkeydown = (e) => {
  if (e.key === "Enter") {
    localStorage.setItem(`searcher_value`, JSON.stringify(searcher_inp.value));
    location.assign("/pages/searcher_page/");
    // searcher_inp.value
  }
  // console.log(searcher_inp.value);
};

btns.forEach((res) => {
  res.onclick = (e) => {
    let chosen = document.querySelectorAll(".chosen");
    for (let item of chosen) {
      item.classList.remove("chosen");
      item.classList.remove("bg-gray-300");
    }
    res.classList.add("chosen");
    res.classList.add("bg-gray-300");
    for (let item of chosen) {
      if (e.target.innerHTML === "Все заказы") {
        all_orders.classList.remove("hidden");
        active_orders.classList.add("hidden");
      } else {
        active_orders.classList.remove("hidden");
        all_orders.classList.add("hidden");
      }
    }
  };
});

sex_btns.forEach((res) => {
  if (user.gender === res.innerHTML) {
    res.classList.add("bg-gray-200");
    res.classList.add("chosen");
  }

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
    id: user.id,
  };

  let fm = new FormData(profile_info);
  //   console.log(user_arr);
  fm.forEach((value, key) => {
    user_arr[key] = value;
  });
  if (user_arr.phone_num.length === 0) {
    document.querySelector(".phone_num").classList.add("border-2");
    document.querySelector(".phone_num").classList.add("border-red-400");
    alert("Укажите номер телефона пожалуйста!");
    return;
  } else if (+user_arr.phone_num !== +user.phone_num) {
    getData("/users?phone_num=" + +user_arr.phone).then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        document.querySelector(".phone_num").classList.add("border-2");
        document.querySelector(".phone_num").classList.add("border-red-400");
        alert("Аккаунт с таким номером уже существует");
        return;
      }
    });
  } else {
    document.querySelector(".phone_num").classList.remove("border-2");
    document.querySelector(".phone_num").classList.remove("border-red-400");
    getData("/users?phone_num=" + +user.phone_num).then((res) => {
      // console.log(res.data);
      // console.log(user_arr);
      for (let item of res.data) {
        // console.log(item);
        // console.log(user_arr);
        editData("/users/" + item.id, user_arr).then((res) => {
          if (res.status !== 200 && res.status !== 201) return;
          console.log(res.data);
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(res.data));
        });
      }
    });
  }
};
