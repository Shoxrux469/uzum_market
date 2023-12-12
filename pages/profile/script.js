import { header, footer } from "/modules/ui";
import { getData, postData } from "/modules/https";

header();
footer();
let user = JSON.parse(localStorage.getItem("user")) || [];
// console.log(user.);

document.querySelector('.surname').value = user.surname
document.querySelector('.name').value = user.name
document.querySelector('.email').value = user.email
document.querySelector('.phone_num').value = user.phone_num

let my_orders_btn = document.querySelector('.my_orders_btn') 
let settings_btn = document.querySelector('.settings_btn') 
let settings = document.querySelector('.settings')
let my_orders = document.querySelector('.my_orders') 



settings_btn.onclick = () => {
    settings_btn.classList.remove('text-[rgba(54,54,64,.35)]')
    settings_btn.classList.add('text-[#1f2026]')
    my_orders_btn.classList.remove('text-[#1f2026]')
    my_orders_btn.classList.add('text-[rgba(54,54,64,.35)]')
    my_orders.classList.add('hidden')
    settings.classList.remove('hidden')
}
my_orders_btn.onclick = () => {
    my_orders_btn.classList.remove('text-[rgba(54,54,64,.35)]')
    my_orders_btn.classList.add('text-[#1f2026]')
    settings_btn.classList.remove('text-[#1f2026]')
    settings_btn.classList.add('text-[rgba(54,54,64,.35)]')
    settings.classList.add('hidden')
    my_orders.classList.remove('hidden')
}
