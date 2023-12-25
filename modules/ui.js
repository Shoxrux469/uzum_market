import { deleteData, editData, getData, postData } from "./https";
export function header() {
  let header = document.querySelector("header");

  header.innerHTML = `
  <div class="media_top_head lg:hidden w-11/12 mx-auto flex justify-between items-center">
  <div class=" flex">
      <img src="/public/Без названия.svg" alt="">
      <div class="ml-4">
          <p>Uzum Market</p>
          <p class="text-sm">Скачать приложение</p>
      </div>
  </div>
  <button class="bg-[#7000ff] text-[#fff] px-4 py-1 rounded-lg">Скачать</button>
</div>
<div class="top_header lg:flex py-[6px] flex hidden bg-[#F4F5F5] w-full">
  <div class="top_header justify-between items-center w-11/12 flex mx-auto">
      <div class="flex items-center">
          <img src="/public/compass-icon.svg" alt="">
          <p class="text-[#141415] cursor-pointer">Город:<span class="font-medium">Ташкент</span></p>
          <p class="ml-5 font-medium cursor-pointer">Пункты выдачи</p>
      </div>
      <div class="text-[#62656A] hidden xl:block">Доставим ваш заказ бесплатно — всего за 1 день!</div>
      <ul class="flex gap-[15px] items-center">
          <li class="text-[#62656A] hover:text-black text-sm cursor-pointer">Вопрос-ответ</li>
          <li class="text-[#62656A] hover:text-black text-sm cursor-pointer">Мои заказы</li>
          <li class="flex text-[#62656A] gap-1 cursor-pointer"><img src="/public/ru_lang_icon.svg" alt="">
              Русский</li>
      </ul>
  </div>
</div>
<div class="header my-4 mb-[10px] flex justify-between w-11/12 mx-auto">
  <svg class="logo hidden cursor-pointer xl:w-2/12 lg:w-3/12 lg:block" data-v-aa1700bc=""
      viewBox="0 0 215 32" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Uzum"
      class="ui-icon  logo">
      <rect width="31.9764" height="31.9764" rx="15.9882" fill="#FFFF00"></rect>
      <path
          d="M3.75192 14.7933C3.27969 12.1152 3.04358 10.7761 3.38441 9.66131C3.68421 8.68069 4.28676 7.82017 5.1057 7.20306C6.0367 6.50149 7.37576 6.26538 10.0539 5.79316L18.144 4.36665C20.8221 3.89442 22.1612 3.65831 23.276 3.99914C24.2566 4.29894 25.1171 4.90149 25.7342 5.72043C26.4358 6.65143 26.6719 7.99049 27.1441 10.6686L28.2537 16.9611C28.7259 19.6393 28.962 20.9783 28.6212 22.0931C28.3214 23.0737 27.7188 23.9343 26.8999 24.5514C25.9689 25.2529 24.6298 25.489 21.9517 25.9613L13.8616 27.3878C11.1835 27.86 9.84441 28.0961 8.72961 27.7553C7.749 27.4555 6.88847 26.8529 6.27136 26.034C5.5698 25.103 5.33368 23.7639 4.86146 21.0858L3.75192 14.7933Z"
          fill="#7000FF"></path>
      <path
          d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
          fill="white"></path>
      <path
          d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
          fill="white"></path>
      <path
          d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
          fill="white"></path>
      <path
          d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
          fill="white"></path>
      <path
          d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
          fill="white"></path>
      <path
          d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
          fill="white"></path>
      <path
          d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
          fill="white"></path>
      <path
          d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
          fill="white"></path>
      <path
          d="M136.192 9.43597C133.804 9.43597 132 10.4097 131.101 11.8772C130.195 10.4097 128.22 9.43597 126.161 9.43597C122.114 9.43597 120.049 11.9938 120.049 15.1688V22.7806H123.829V15.7037C123.829 14.1951 124.631 12.851 126.456 12.851C128.288 12.851 129.235 14.1333 129.235 15.6488V22.7806H133.029V15.6488C133.029 14.1265 133.921 12.851 135.739 12.851C137.571 12.851 138.421 14.1951 138.421 15.7037V22.7806H142.202V15.1688C142.195 11.9938 140.246 9.43597 136.192 9.43597Z"
          fill="#7000FF"></path>
      <path
          d="M159.051 18.1861V9.6897H155.312L155.34 11.7538C154.523 10.54 153.096 9.43597 150.558 9.43597C146.194 9.43597 143.951 12.8236 143.951 16.2249C143.869 19.6673 146.407 23.0892 150.373 23.0892C152.472 23.0892 154.393 22.1566 155.312 20.5177C155.683 21.6011 156.623 22.7875 158.571 22.7875H160.732V19.6125H160.128C159.374 19.6125 159.051 19.3313 159.051 18.1861ZM151.347 19.8113C149.199 19.8113 147.594 18.3301 147.594 16.2523C147.594 14.2019 149.199 12.7481 151.347 12.7481C153.563 12.7481 155.168 14.2019 155.168 16.2523C155.168 18.3301 153.563 19.8113 151.347 19.8113Z"
          fill="#7000FF"></path>
      <path
          d="M163.14 14.1539V22.7806H166.92V16.9929C166.92 14.7505 168.546 13.3104 170.618 13.3104H173.088V9.41537H171.236C168.951 9.41537 167.284 11.3629 166.92 12.4944V12.0966V9.68282H163.14V14.1539Z"
          fill="#7000FF"></path>
      <path
          d="M175.325 22.7806H179.105V16.3688L184.978 22.7806H189.437L183.352 16.0534L188.971 9.68967H184.525L179.105 15.8271V5.6369H175.325V22.7806Z"
          fill="#7000FF"></path>
      <path
          d="M193.862 17.2604C193.862 18.7004 194.61 20.1542 197.025 20.1542C199.241 20.1542 199.563 18.8239 199.563 18.8239H203.714C203.714 18.8239 203.33 23.0892 197.025 23.0892C192.634 23.0892 189.883 20.6342 189.883 16.2523C189.883 11.8635 192.634 9.43597 196.984 9.43597C201.272 9.43597 204.037 11.8635 204.037 16.2523C204.037 16.7323 203.954 17.2672 203.954 17.2672H193.862V17.2604ZM193.91 14.9562H199.996C199.996 13.8865 199.378 12.371 196.977 12.371C194.61 12.371 193.91 13.8933 193.91 14.9562Z"
          fill="#7000FF"></path>
      <path
          d="M212.661 19.4959C211.364 19.4959 210.897 18.9198 210.897 17.0957V12.4807H214.993V9.44281H210.897V6.83011H208.853L205.21 10.3137V12.4875H207.117V17.5963C207.117 21.2651 208.908 22.808 212.661 22.808H215V19.5027H212.661V19.4959Z"
          fill="#7000FF"></path>
      <path
          d="M83.6802 16.4854C83.6802 18.5564 82.507 19.5164 80.7644 19.5164C79.0218 19.5164 77.8898 18.577 77.8898 16.4854V9.64166H74.1301V16.6157C74.1301 21.1622 77.9309 22.9383 80.7918 22.9383C83.6527 22.9383 87.4604 21.1554 87.4604 16.6157V9.64166H83.7007L83.6802 16.4854Z"
          fill="#7000FF"></path>
      <path
          d="M70.9468 12.8167V9.64166H58.728V12.8167H65.966L58.4398 19.5233V22.6983H71.4133V19.5233H63.4344L70.9468 12.8167Z"
          fill="#7000FF"></path>
      <path
          d="M106.286 9.39484C103.905 9.39484 102.108 10.3617 101.216 11.8361C100.31 10.3617 98.3414 9.39484 96.2969 9.39484C92.2766 9.39484 90.1841 11.9527 90.1841 15.1208V22.6983H93.9437V15.6489C93.9437 14.1334 94.7395 12.803 96.5645 12.803C96.935 12.7824 97.3054 12.8373 97.6553 12.9676C98.0052 13.0979 98.3208 13.3036 98.5815 13.571C98.8422 13.8316 99.048 14.1539 99.1784 14.5037C99.3088 14.8534 99.3636 15.2237 99.3431 15.594V22.6983H103.103V15.594C103.103 14.0785 103.995 12.803 105.799 12.803C107.603 12.803 108.475 14.1334 108.475 15.6489V22.6983H112.234V15.1277C112.234 11.9664 110.293 9.40169 106.252 9.40169L106.286 9.39484Z"
          fill="#7000FF"></path>
      <path
          d="M52.1966 16.4854C52.1966 18.5564 51.0235 19.5164 49.2946 19.5164C47.5657 19.5164 46.4062 18.577 46.4062 16.4854V9.64166H42.6466V16.6157C42.6466 21.1622 46.4337 22.9383 49.3083 22.9383C52.1829 22.9383 55.9631 21.1554 55.9631 16.6157V9.64166H52.2035L52.1966 16.4854Z"
          fill="#7000FF"></path>
  </svg>
  <div class="header_btns h-full lg:h-auto w-full lg:w-auto flex items-center gap-2">
      <button
          class="catalog hidden lg:flex items-center gap-2 h-11/12 px-7 text-[#7000ff] hover:bg-[#ceccff] ease-in-out duration-150 justify-center bg-[#f0f0ff] rounded p-2">
          <img src="/public/catalog_icon.svg" alt="">
          <p class="text-[#7000ff]">Каталог</p>
      </button>
      <div
          class="searcher_div lg:bg-white relative flex lg:justify-between bg-[#edeff2] pl-1 items-center rounded-lg lg:border lg:border-gray-300 w-full lg:rounded-md">
          <img class="ml-4 my-1 lg:hidden" src="/public/searcher_icon.svg" alt="">
          <input
              class="searcher_inp w-full lg:bg-white lg:w-96 rounded-lg lg:rounded-none bg-[#edeff2] text-sm lg:text-base border-none lg:h-8 text-gray-500"
              type="text" placeholder="Искать товары и категории">
          <img class="hidden lg:block bg-gray-100 px-6 py-2 rounded-r" src="/public/searcher_icon.svg"
              alt="">
      </div>
  </div>
  <div class="header_right lg:ml-4 hidden lg:flex items-center xl:gap-3">
      <button
          class="log_in_btn w-12 xl:w-auto h-10 xl:gap-2 hover:bg-gray-200 xl:px-2 flex items-center rounded">
          <img class="block" src="/public/log_in_icon.svg" alt="">
          <p class="hidden xl:block">Войти</p>
      </button>
      <button
          class="favorites_btn h-10 xl:gap-2 w-12 xl:w-auto hover:bg-gray-200 xl:px-2 flex items-center rounded">
          <img src="/public/heart_icon.svg" alt="">
          <p class="hidden xl:block">Избранное</p>
      </button>
      <button
          class="bag_main_btn h-10 xl:gap-2 w-12 xl:w-auto hover:bg-gray-200 xl:px-2 flex items-center rounded relative">
          <img src="/public/bag_icon.svg" alt="">
          <p class="bag_btn hidden xl:flex xl:gap-1 text-center">
              Корзина
              <span
                  class="prod_quantity bg-[#7000ff] text-center text-white px-[7px] py-[1.5px] text-sm rounded">

              </span>
          </p>
          <div class="bag_main_modal hidden absolute flex flex-col bottom-0 rounded left-[-207%]">
              <div class="bag_modal flex w-[420px] bg-white flex-col">

              </div>
          </div>
      </button>
  </div>
</div>
<ol class="header_bottom mb-3 hidden lg:flex gap-[14px] w-12/12 mx-auto justify-center">
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Электроника</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Бытовая техника</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Одежда</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Обувь</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Аксессуары</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Красота</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Здоровье</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Товары для дома</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black">Строительство и ремонт</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black hidden xl:block">Автотовары</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black hidden xl:block">Детские товары</li>
  <li class="text-[#595b66] h-[28px] cursor-pointer border-black flex items-center gap-1">Еще <img
          src="/public/arrow_bottom.svg" alt=""></li>
</ol>
           `;
}

export function footer() {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="footer my-24 flex justify-between flex-col lg:flex-row items-center lg:items-start mx-auto w-11/12">
  <ul class="flex_daddy flex flex-col h-[20px] items-center lg:items-start mb-4 lg:gap-4">
      <li class="font-semibold flex items-center gap-3 footer_ul">О нас <img class="w-6 lg:hidden" src="/public/arrow_bottom.svg" alt=""></li>
      <li class="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block"><a href="">Пункты выдачи</a></li>
      <li class="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block"><a href="">Вакансии</a></li>
  </ul>
  <div class="line border-[1px] lg:hidden my-4 border-gray-200 w-full">

  </div>
  <ul class="flex_daddy flex flex-col items-center lg:items-start h-[20px] mb-4 lg:gap-4">
      <li class="font-semibold flex gap-3 items-center footer_ul">Пользователям <img class="w-6 lg:hidden" src="/public/arrow_bottom.svg" alt=""></li>
      <li class="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block"><a href="">Связаться с нами</a></li>
      <li class="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block"><a href="">Вопрос - Ответ</a></li>
  </ul>
  <div class="line border-[1px] my-4 lg:hidden border-gray-200 w-full">

  </div>
  <ul class="flex_daddy flex mb-3 flex-col items-center lg:items-start h-[20px] mb-4 lg:gap-4">
      <li class="font-semibold flex gap-3 items-center footer_ul">Для предпринимателей <img class="w-6 lg:hidden" src="/public/arrow_bottom.svg" alt=""></li>
      <li class="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block"><a href="">Продавайте на Uzuma</a></li>
      <li class="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block"><a href="">Вход для продавцов</a></li>
  </ul>	
  <ul class="flex flex-col gap-8 mb-4">
      <li class="flex flex-col items-center lg:items-start gap-4">
          <p class="font-semibold flex gap-3 items-center">Скачать приложение</p>
          <div class="flex gap-3">
              <a class="flex items-center gap-1" href="#"> <img src="/public/apple.svg" alt="">
                  <span>AppStore</span></a>
              <a class="flex items-center gap-1" href="#"> <img src="/public/google_play.svg" alt="">
                  <span>Google Play</span></a>
          </div>
      </li>
      <li class="flex flex-col lg:items-start items-center gap-4">
          <p class="font-semibold">Uzum в соцсетях</p>
          <nav class="flex gap-3 w-28 lg:w-auto flex-wrap">
              <a href="#"><img class="w-12 lg:w-auto" src="/public/insta.svg" alt=""></a>
              <a href="#"><img class="w-12 lg:w-auto" src="/public/telegram.svg" alt=""></a>
              <a href="#"><img class="w-12 lg:w-auto" src="/public/youtube.svg" alt=""></a>
              <a href="#"><img class="w-12 lg:w-auto" src="/public/facebook.svg" alt=""></a>
          </nav>
      </li>
  </ul>
</div> 
<div class="px-11 flex flex-col mb-20 md:mb-0 text-center gap-4 lg:flex-row pb-4 justify-between items-center">
<p class="font-semibold text-[15px]">Соглашение о конфиденциональности <span class="ml-4">Пользовательсвое
        соглашение</span></p>
<p class="text-xs opacity-50">«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
</div>
    `;
}

export function loader() {
  let box = document.querySelector(".box");

  box.innerHTML = `
    <div class="loader_box bg-slate-950 bg-opacity-30">
    <div class="loader bg-white bg-opacity-60 animate-pulse">
        <div class="inner_loader bg-white animate-pulse bg-opacity-60">
        </div>
    </div>
</div>
    `;
}

export function modal_container() {
  let modal_container = document.querySelector(".modal_container");

  modal_container.innerHTML = `
  
  <ul class="menu flex pt-2 fixed lg:hidden justify-between w-full px-3 md:px-6 bottom-0 left-0 right-0 bg-white">
  <li class="flex flex-col items-center">
      <svg class="w-8 md:w-10 md:w-12" class="" data-v-b2fd8610="" viewBox="0 0 29 28" fill="#7000ff"
          xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <g id="Icon">
              <g id="Icon_2">
                  <path
                      d="M14.5001 7.54553C14.1116 7.54553 13.7296 7.562 13.351 7.59492L13.3444 12.9357H15.6493V7.59492C15.2706 7.54553 14.8887 7.54553 14.5001 7.54553Z"
                      fill="#8B8E99"></path>
                  <path
                      d="M19.0543 19.1165C20.2621 17.9087 20.9407 16.2705 20.9407 14.5623V10.7065C20.1054 10.4275 19.2516 10.2075 18.3855 10.048V14.5393C18.3855 17.7694 17.0158 19.4586 14.5001 19.4586C11.9845 19.4586 10.618 17.7694 10.618 14.5393V10.048C9.75095 10.2079 8.89607 10.4279 8.05957 10.7065V14.5623C8.05957 16.2705 8.73813 17.9087 9.94597 19.1165C11.1538 20.3243 12.792 21.0029 14.5001 21.0029C16.2083 21.0029 17.8465 20.3243 19.0543 19.1165Z"
                      fill="#8B8E99"></path>
                  <path
                      d="M14.5 2C7.87258 2 2.5 7.37258 2.5 14C2.5 20.6274 7.87258 26 14.5 26C21.1274 26 26.5 20.6274 26.5 14C26.5 7.37258 21.1274 2 14.5 2ZM4 14C4 8.20101 8.70101 3.5 14.5 3.5C20.299 3.5 25 8.20101 25 14C25 19.799 20.299 24.5 14.5 24.5C8.70101 24.5 4 19.799 4 14Z"
                      fill="#8B8E99"></path>
              </g>
          </g>
      </svg>
      <p class="main_page text-xs md:text-base">Главная</p>
  </li>
  <li class="flex flex-col items-center">
      <svg class="w-8 md:w-10 md:w-12" data-v-b2fd8610="" viewBox="0 0 29 28" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <g id="Icon">
              <g id="Icon_2">
                  <path
                      d="M1.5 12.5C1.5 7.25329 5.75329 3 11 3C16.2467 3 20.5 7.25329 20.5 12.5C20.5 14.853 19.6445 17.0062 18.2276 18.6656L24.2795 24.6993C24.5728 24.9917 24.5735 25.4666 24.2811 25.7599C23.9886 26.0532 23.5138 26.054 23.2204 25.7615L17.1671 19.7264C15.5075 21.144 13.3537 22 11 22C5.75329 22 1.5 17.7467 1.5 12.5ZM11 4.5C6.58172 4.5 3 8.08172 3 12.5C3 16.9183 6.58172 20.5 11 20.5C15.4183 20.5 19 16.9183 19 12.5C19 8.08172 15.4183 4.5 11 4.5Z"
                      fill="#8B8E99"></path>
                  <path
                      d="M22.75 6.00003C22.3358 6.00003 22 6.33582 22 6.75003C22 7.16424 22.3358 7.50003 22.75 7.50003H26.75C27.1642 7.50003 27.5 7.16424 27.5 6.75003C27.5 6.33582 27.1642 6.00003 26.75 6.00003H22.75Z"
                      fill="#8B8E99"></path>
                  <path
                      d="M22.75 11.75C22.3358 11.75 22 12.0858 22 12.5C22 12.9142 22.3358 13.25 22.75 13.25H26.75C27.1642 13.25 27.5 12.9142 27.5 12.5C27.5 12.0858 27.1642 11.75 26.75 11.75H22.75Z"
                      fill="#8B8E99"></path>
                  <path
                      d="M22.75 17.5C22.3358 17.5 22 17.8358 22 18.25C22 18.6642 22.3358 19 22.75 19H26.75C27.1642 19 27.5 18.6642 27.5 18.25C27.5 17.8358 27.1642 17.5 26.75 17.5H22.75Z"
                      fill="#8B8E99"></path>
              </g>
          </g>
      </svg>
      <p class="text-xs md:text-base">Каталог</p>
  </li>
  <li class="flex flex-col items-center">
      <svg class="w-8 md:w-10 md:w-12" data-v-b2fd8610="" viewBox="0 0 29 28" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <g id="Icon">
              <path id="Icon_2"
                  d="M9.5 7C9.5 4.5444 11.4295 2 14.5 2C17.5705 2 19.5 4.54439 19.5 7H24V22.25C24 24.3211 22.3211 26 20.25 26H8.75C6.67893 26 5 24.3211 5 22.25V7H9.5ZM11 7H18C18 5.25561 16.6295 3.5 14.5 3.5C12.3705 3.5 11 5.2556 11 7ZM9.5 8.5H6.5V22.25C6.5 23.4926 7.50736 24.5 8.75 24.5H20.25C21.4926 24.5 22.5 23.4926 22.5 22.25V8.5H19.5V11.5H18V8.5H11V11.5H9.5V8.5Z"
                  fill="#8B8E99"></path>
          </g>
      </svg>
      <p class="modal_bag text-xs relative md:text-base">
          Корзина
      <p
          class="prod_quantity absolute bg-black text-white rounded-full px-2 md:px-3 md:py-1 top-0 right-[47.5%]">
      </p>
      </p>
  </li>
  <li class="modal_favorites flex flex-col items-center">
      <svg class="w-8 md:w-10 md:w-12" data-v-b2fd8610="" viewBox="0 0 29 28" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <g id="Icon">
              <path id="Icon_2"
                  d="M9.02703 4C5.38324 4 2.5 6.96273 2.5 10.5391C2.5 16 9.99615 21.5 14.0055 24.8139C14.2885 25.062 14.7115 25.062 14.9945 24.8139C19 21.5 26.5 16 26.5 10.5391C26.5 6.96281 23.6178 4 19.973 4C17.2008 4 15.3841 5.6987 14.5 6.79192C13.6159 5.6987 11.7992 4 9.02703 4ZM4 10.5391C4 7.7779 6.22487 5.5 9.02703 5.5C11.7441 5.5 13.3368 7.65762 13.7573 8.32095C14.1013 8.86359 14.8987 8.86359 15.2427 8.32095C15.6632 7.65762 17.2559 5.5 19.973 5.5C22.776 5.5 25 7.77781 25 10.5391C25 15.1 18 20.5 14.5 23.2667C11 20.5 4 15.1 4 10.5391Z"
                  fill="#8B8E99"></path>
          </g>
      </svg>
      <p class="text-xs md:text-base">Избранное</p>
  </li>
  <li class="flex flex-col items-center">
      <svg class="w-8 md:w-10 md:w-12" data-v-b2fd8610="" viewBox="0 0 29 28" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <g id="Icon">
              <g id="Icon_2">
                  <path
                      d="M14.5 3C11.4624 3 9 5.46243 9 8.5C9 11.5376 11.4624 14 14.5 14C17.5376 14 20 11.5376 20 8.5C20 5.46243 17.5376 3 14.5 3ZM10.5 8.5C10.5 6.29086 12.2909 4.5 14.5 4.5C16.7091 4.5 18.5 6.29086 18.5 8.5C18.5 10.7091 16.7091 12.5 14.5 12.5C12.2909 12.5 10.5 10.7091 10.5 8.5Z"
                      fill="#8B8E99"></path>
                  <path
                      d="M14.5025 15C9.16883 15 4.5 19.0011 4.5 24C4.5 25.1046 5.39543 26 6.5 26H22.5C23.6046 26 24.5 25.1046 24.5 24C24.5 19.0057 19.8369 15 14.5025 15ZM6 24C6 19.9911 9.82583 16.5 14.5025 16.5C19.1783 16.5 23 19.9943 23 24C23 24.2761 22.7761 24.5 22.5 24.5H6.5C6.22386 24.5 6 24.2761 6 24Z"
                      fill="#8B8E99"></path>
              </g>
          </g>
      </svg>
      <p class="profile text-xs md:text-base">Кабинет</p>
  </li>
</ul>
  `;
}

export function reload_products(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    // console.log(item);
    let product_card = document.createElement("div");
    let img_box = document.createElement("div");
    let discount = document.createElement("div");
    let like = document.createElement("img");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let rating = document.createElement("span");
    let star_icon = document.createElement("img");
    let monthly_price = document.createElement("span");
    let down_div = document.createElement("div");
    let prices_box = document.createElement("div");
    let salePrice = document.createElement("span");
    let price = document.createElement("p");
    let bag_img_btn = document.createElement("button");
    let bag_img = document.createElement("img");
    let pop_up_modal = document.querySelector(".pop_up_modal");
    product_card.classList.add("product_card");
    product_card.classList.add("flex");
    product_card.classList.add("w-[45%]");
    product_card.classList.add("sm:w-[31%]");
    product_card.classList.add("md:w-[200px]");
    product_card.classList.add("lg:w-[220px]");
    product_card.classList.add("xl:w-[230px]");
    product_card.classList.add("cursor-pointer");
    product_card.classList.add("flex-col");
    discount.classList.add("absolute");
    discount.classList.add("bottom-0");
    discount.classList.add("left-0");
    discount.classList.add("bg-[#5000AA]");
    discount.classList.add("text-slate-50");
    discount.classList.add("rounded");
    discount.classList.add("px-1");
    img_box.classList.add("w-[100%]");
    img_box.classList.add("md:w-[200px]");
    img_box.classList.add("lg:w-[220px]");
    img_box.classList.add("xl:w-[230px]");
    img_box.classList.add("relative");
    like.classList.add("absolute");
    like.classList.add("top-2");
    like.classList.add("w-fit");
    like.classList.add("right-2");
    like.classList.add("like_btn");
    monthly_price.classList.add("bg-[#FFFF00]");
    monthly_price.classList.add("w-fit");
    monthly_price.classList.add("rounded");
    monthly_price.classList.add("px-1");
    img.classList.add("w-full");
    img.classList.add("rounded");
    rating.classList.add("flex");
    rating.classList.add("text-[#8A8D93]");
    rating.classList.add("mb-2");
    title.classList.add("w-full");
    title.classList.add("mt-4");
    down_div.classList.add("mt-4");
    down_div.classList.add("flex");
    down_div.classList.add("justify-between");
    down_div.classList.add("align-center");
    price.classList.add("text-[#757575]");
    price.classList.add("line-through");
    price.classList.add("text-xs");
    salePrice.classList.add("text-sm");
    bag_img.classList.add("bag_img");
    bag_img.classList.add("cursor-pointer");
    // console.log(item);

    img.src = item.media[0];
    like.src = "/public/like_icon.svg";
    like.onclick = (e) => {
      let liked_arr = {
        prod_id: item.id,
      };
      like.src = "/public/purple_heart.svg";
      like.classList.add("liked_product");
      like.classList.add("scale-125");
      like.classList.add("duration-200");
      postData("/liked", liked_arr).then((res) => {
        if (res.status !== 200 && res.status !== 201) return;
      });

      setTimeout(() => {
        like.classList.remove("scale-125");
        like.classList.add("duration-200");
      }, 300);

      let liked_product = document.querySelector(".liked_product");
      //   console.log(liked_product);

      liked_product.onclick = () => {
        liked_product.src = "/public/like_icon.svg";
        like.classList.remove("liked_product");
      };
    };

    title.innerHTML = item.title.slice(0, 48) + "..";
    // console.log(title.innerHTML.);
    // console.log(item);

    if (item.id == 12) {
      title.innerHTML = item.title.slice(0, 47);
    }
    rating.innerHTML = item.rating;
    monthly_price.innerHTML =
      Math.round((item.price * 12) / 100)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб/мес";
    salePrice.innerHTML =
      item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";

    if (item.salePercentage > 0) {
      salePrice.innerHTML =
        item.price -
        Math.floor((item.price * item.salePercentage) / 100) +
        " руб";
    }
    bag_img_btn.onclick = () => {
      let bag_obj = {
        prod_id: item.id,
        num: 1,
      };

      pop_up_modal.innerHTML = "";
      pop_up_modal.classList.remove("top-2");
      pop_up_modal.classList.add("opacity-0");
      pop_up_modal.classList.add("top-[-130px]");

      getData("/bag").then((res) => {
        let found = res.data.find((elem) => elem.prod_id === item.id);

        console.log(found);

        if (found) {
          for (let elem of res.data) {
            let edited_bag = {
              num: (elem.num += 1),
            };

            if (elem.prod_id === found.prod_id) {
              elem.num += 1;

              editData("/bag/" + elem.id, edited_bag).then((res) => {
                if (res.status !== 200 && res.status !== 201) return;
              });
            }
          }
        } else {
          postData("/bag", bag_obj).then((res) => {
            setTimeout(() => {
              location.reload();
            }, 3000);
          });
        }
      });

      setTimeout(() => {
        pop_up_modal.classList.add("ease-out");
        pop_up_modal.classList.add("duration-500");
        pop_up_modal.classList.remove("opacity-0");
        pop_up_modal.classList.remove("top-[-130px]");
        pop_up_modal.classList.add("top-2");
      }, 200);
      setTimeout(() => {
        pop_up_modal.innerHTML = "";
        pop_up_modal.classList.remove("top-2");
        pop_up_modal.classList.add("opacity-0");
        pop_up_modal.classList.add("top-[-130px]");
      }, 3000);

      let pop_up_close = document.createElement("img");
      let pop_up_img = document.createElement("img");
      let pop_up_div = document.createElement("div");
      let pop_up_h2 = document.createElement("h2");
      let pop_up_p = document.createElement("p");
      let pop_up_btn = document.createElement("button");

      pop_up_img.classList.add("w-28");
      pop_up_img.classList.add("h-28");
      pop_up_h2.classList.add("text-2xl");
      pop_up_h2.classList.add("font-semibold");
      pop_up_close.classList.add("absolute");
      pop_up_close.classList.add("top-3");
      pop_up_close.classList.add("right-4");
      pop_up_close.classList.add("w-4");
      pop_up_close.classList.add("h-4");
      pop_up_btn.classList.add("absolute");
      pop_up_btn.classList.add("bottom-3");
      pop_up_btn.classList.add("right-4");
      pop_up_btn.classList.add("text-xl");
      pop_up_btn.classList.add("font-semibold");
      pop_up_btn.classList.add("text-[#7000ff]");

      pop_up_img.src = item.media[0];
      pop_up_close.src = "/public/close_icon.png";
      pop_up_h2.innerHTML = "Товар добавлен в корзину";
      pop_up_p.innerHTML = item.title;
      pop_up_btn.innerHTML = "Перейти в корзину";

      pop_up_modal.append(pop_up_img, pop_up_div, pop_up_close, pop_up_btn);
      pop_up_div.append(pop_up_h2, pop_up_p);
    };
    product_card.onclick = (e) => {
      // console.log(e.target.classList);
      if (
        e.target.classList[4] !== "like_btn" &&
        e.target.classList[0] !== "bag_img"
      ) {
        setTimeout(() => {
          loader();
        }, 200);
        setTimeout(() => {
          location.assign(`/pages/product_page/?id=${item.id}`);
        }, 1000);
      }
    };

    price.innerHTML =
      Math.round(item.price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    bag_img.src = "/public/product_bag_icon.svg";
    // bag_img_btn.innerHTML = "X";
    discount.innerHTML = "Акция";
    star_icon.src = "/public/start_icon.svg";

    place.append(product_card);
    product_card.append(img_box, title, rating, monthly_price, down_div);
    img_box.append(img, discount, like);
    rating.prepend(star_icon);
    bag_img_btn.append(bag_img);
    down_div.append(prices_box, bag_img_btn);
    prices_box.append(price, salePrice);
  }
}

export function reload_favorites(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    // console.log(item);
    let swiper_slide = document.createElement("div");
    let product_card = document.createElement("div");
    let img_box = document.createElement("div");
    let discount = document.createElement("div");
    let like = document.createElement("img");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let rating = document.createElement("span");
    let star_icon = document.createElement("img");
    let monthly_price = document.createElement("span");
    let down_div = document.createElement("div");
    let prices_box = document.createElement("div");
    let salePrice = document.createElement("span");
    let price = document.createElement("p");
    let bag_img_btn = document.createElement("button");
    let bag_img = document.createElement("img");

    swiper_slide.classList.add("swiper-slide");
    swiper_slide.classList.add("w-fit");
    product_card.classList.add("product_card");
    product_card.classList.add("mx-auto");
    product_card.classList.add("flex");
    product_card.classList.add("w-[200px]");
    product_card.classList.add("md:w-[220px]");
    product_card.classList.add("lg:w-[220px]");
    product_card.classList.add("xl:w-[230px]");
    product_card.classList.add("cursor-pointer");
    product_card.classList.add("flex-col");
    discount.classList.add("absolute");
    discount.classList.add("bottom-0");
    discount.classList.add("left-0");
    discount.classList.add("bg-[#5000AA]");
    discount.classList.add("text-slate-50");
    discount.classList.add("rounded");
    discount.classList.add("px-1");
    img_box.classList.add("w-[200px]");
    img_box.classList.add("md:w-[220px]");
    img_box.classList.add("lg:w-[220px]");
    img_box.classList.add("xl:w-[230px]");
    img_box.classList.add("relative");
    like.classList.add("absolute");
    like.classList.add("top-2");
    like.classList.add("w-fit");
    like.classList.add("right-2");
    like.classList.add("like_btn");
    monthly_price.classList.add("bg-[#FFFF00]");
    monthly_price.classList.add("w-fit");
    monthly_price.classList.add("rounded");
    monthly_price.classList.add("px-1");
    img.classList.add("w-full");
    img.classList.add("rounded");
    rating.classList.add("flex");
    rating.classList.add("text-[#8A8D93]");
    rating.classList.add("mb-2");
    title.classList.add("w-full");
    title.classList.add("mt-4");
    down_div.classList.add("mt-4");
    down_div.classList.add("flex");
    down_div.classList.add("justify-between");
    down_div.classList.add("align-center");
    price.classList.add("text-[#757575]");
    price.classList.add("line-through");
    price.classList.add("text-xs");
    salePrice.classList.add("text-sm");
    bag_img.classList.add("cursor-pointer");
    // console.log(item);

    img.src = item.media[0];
    like.src = "/public/purple_heart.svg";
    like.onclick = () => {
      getData("/liked").then((res) => {
        for (let elem of res.data) {
          if (elem.prod_id === item.id) {
            deleteData(`/liked/${elem.id}`).then((res) => {
              console.log(res.data);
            });
            location.reload();
          }
        }
      });
    };

    title.innerHTML = item.title.slice(0, 48) + "..";
    // console.log(title.innerHTML.);
    // console.log(item);

    if (item.id == 12) {
      title.innerHTML = item.title.slice(0, 47);
    }
    rating.innerHTML = item.rating;
    monthly_price.innerHTML =
      Math.round((item.price * 12) / 100)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб/мес";
    salePrice.innerHTML =
      item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";

    if (item.salePercentage > 0) {
      salePrice.innerHTML =
        item.price -
        Math.floor((item.price * item.salePercentage) / 100) +
        " руб";
    }
    bag_img_btn.onclick = (e) => {
      //   console.log(e.target);
      location.assign("/pages/bag_page/");
      if (e.target === product_card) {
        e.stopPropagation();
      } else {
        console.log(item);
      }
    };
    product_card.onclick = (e) => {
      // console.log(e.target.classList);
      if (
        e.target.classList[4] !== "like_btn" ||
        e.target.classList[0] !== "bag_img"
      ) {
        setTimeout(() => {
          loader();
        }, 200);
        setTimeout(() => {
          console.log(e.target);
          location.assign(`/pages/product_page/?id=${item.id}`);
        }, 1000);
      }
    };

    price.innerHTML =
      Math.round(item.price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    bag_img.src = "/public/product_bag_icon.svg";
    // bag_img_btn.innerHTML = "X";
    discount.innerHTML = "Акция";
    star_icon.src = "/public/start_icon.svg";

    place.append(swiper_slide);
    swiper_slide.append(product_card);
    product_card.append(img_box, title, rating, monthly_price, down_div);
    img_box.append(img, discount, like);
    rating.prepend(star_icon);
    bag_img_btn.append(bag_img);
    down_div.append(prices_box, bag_img_btn);
    prices_box.append(price, salePrice);
  }
}

export function reload_bag_modal(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    let prod_card = document.createElement("div");
    let prod_img = document.createElement("img");
    let left = document.createElement("div");
    let span = document.createElement("span");
    let prod_div = document.createElement("div");
    let prod_h2 = document.createElement("h2");
    let prod_p = document.createElement("span");
    let trash_img = document.createElement("img");

    prod_card.classList.add("rounded");
    prod_card.classList.add("flex");
    prod_card.classList.add("px-3");
    prod_card.classList.add("py-6");
    prod_card.classList.add("h-16");
    prod_card.classList.add("hover:bg-gray-200");
    prod_card.classList.add("items-center");
    prod_card.classList.add("justify-between");
    prod_div.classList.add("text-start");
    left.classList.add("flex");
    left.classList.add("justify-between");
    left.classList.add("items-center");
    left.classList.add("gap-2");
    prod_img.classList.add("w-10");
    prod_img.classList.add("h-10");
    prod_h2.classList.add("prod_text");
    prod_h2.classList.add("text-sm");
    prod_p.classList.add("text-sm");
    prod_p.classList.add("font-semibold");
    span.classList.add("text-sm");
    // prod_div.classList.add('w-[400px]')
    trash_img.classList.add("w-[15px]");
    getData("/bag").then((res) => {
      for (let elem of res.data) {
        if (item.id === elem.prod_id) {
          if (elem.num > 1) {
            span.innerHTML = " X " + elem.num;
          }
        }
      }
    });
    trash_img.classList.add("h-[15px]");

    trash_img.onclick = (e) => {
      getData("/bag").then((res) => {
        for (let elem of res.data) {
          if (elem.prod_id === item.id) {
            deleteData(`/bag/${elem.id}`).then((res) => {
              console.log(res.data);
            });
            location.reload();
          }
        }
      });
    };
    prod_card.onclick = (e) => {
      if (e.target.classList[0] === "prod_text") {
        location.assign(`/pages/product_page/?id=${item.id}`);
      }
    };

    prod_h2.innerHTML = item.title.slice(0, 40) + "..";
    prod_p.innerHTML =
      item.price -
      Math.floor((item.price * item.salePercentage) / 100) +
      " руб";
    prod_img.src = item.media[0];
    trash_img.src = "/public/trash_img.png";

    place.prepend(prod_card);
    prod_card.append(left, trash_img);
    left.append(prod_img, prod_div);
    prod_div.append(prod_h2, prod_p);
    prod_p.append(span);
  }
  let div = document.createElement("div");
  let button = document.createElement("button");

  button.onclick = () => {
    location.assign("/pages/order_prod/");
  };

  button.innerHTML = "Оформить заказ";
  button.classList.add("font-semibold");
  button.classList.add("text-white");
  button.classList.add("bg-[#7000ff]");
  button.classList.add("py-[5px]");
  button.classList.add("rounded");
  button.classList.add("w-full");
  div.classList.add("px-4");
  div.classList.add("py-4");
  div.classList.add("bg-[#f0f0ff]");

  place.append(div);
  div.append(button);
}
export function reload_bag_prods(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    let prod_card = document.createElement("div");
    let bottom_div = document.createElement("div");
    let left = document.createElement("div");
    let right = document.createElement("div");
    let top_div = document.createElement("div");
    let down_div = document.createElement("div");
    let saler = document.createElement("p");
    let saler_span = document.createElement("span");
    let prod_title = document.createElement("h2");
    let delete2_div = document.createElement("div");
    let delete_div = document.createElement("div");
    let delete2_img = document.createElement("img");
    let delete_img = document.createElement("img");
    let delete2_text = document.createElement("p");
    let delete_text = document.createElement("p");
    let quantity2_div = document.createElement("div");
    let quantity_div = document.createElement("div");
    let quantity2_minus = document.createElement("p");
    let quantity_minus = document.createElement("p");
    let quantity2_num = document.createElement("p");
    let quantity_num = document.createElement("p");
    let quantity2_plus = document.createElement("p");
    let quantity_plus = document.createElement("p");
    let sum_div = document.createElement("div");
    let real_sum = document.createElement("p");
    let fake_sum = document.createElement("span");
    let quantity2_sum = document.createElement("span");
    let quantity_sum = document.createElement("span");
    let input = document.createElement("input");
    let prod_img = document.createElement("img");
    let quantity2_main_div = document.createElement("div");
    let quantity_main_div = document.createElement("div");

    getData("/bag").then((res) => {
      for (let elem of res.data) {
        if (elem.prod_id === item.id) {
          quantity2_num.innerHTML = elem.num;
          quantity_num.innerHTML = elem.num;
        }
      }
    });

    if (item.salePercentage > 0) {
      real_sum.innerHTML =
        (item.price - Math.floor((item.price * item.salePercentage) / 100))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
      quantity_sum.innerHTML =
        (item.price - Math.floor((item.price * item.salePercentage) / 100))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб/ед";
    } else {
      real_sum.innerHTML =
        item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
      quantity2_sum.innerHTML = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб/ед";
      quantity_sum.innerHTML = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб/ед";
    }
    fake_sum.innerHTML =
      item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
    quantity2_minus.innerHTML = "-";
    quantity_minus.innerHTML = "-";
    quantity2_plus.innerHTML = "+";
    quantity_plus.innerHTML = "+";
    delete2_text.innerHTML = "Удалить";
    delete_text.innerHTML = "Удалить";
    prod_img.src = item.media[0];
    delete2_img.src = "/public/trash_img.png";
    delete_img.src = "/public/trash_img.png";
    prod_title.innerHTML = item.title.slice(0, 45);
    input.type = "checkbox";
    saler.innerHTML = "Продавец:";
    saler_span.innerHTML = "Uzum";

    prod_card.onclick = (e) => {
      if (e.target.classList[0] !== "delete_text") {
        setTimeout(() => {
          loader();
        }, 200);
        setTimeout(() => {
          location.assign(`/pages/product_page/?id=${item.id}`);
        }, 1000);
      }
    };

    delete_text.onclick = (e) => {
      getData("/bag").then((res) => {
        for (let elem of res.data) {
          if (elem.prod_id === item.id) {
            deleteData(`/bag/${elem.id}`).then((res) => {
              console.log(res.data);
            });
            location.reload();
          }
        }
      });
    };

    saler.classList.add("w-8/12");
    saler.classList.add("md:w-[21.875rem]");
    saler.classList.add("text-xs");
    saler.classList.add("md:text-base");
    bottom_div.classList.add("flex");
    bottom_div.classList.add("justify-between");
    bottom_div.classList.add("items-center");
    prod_card.classList.add("border-t");
    prod_card.classList.add("flex");
    prod_card.classList.add("items-center");
    prod_card.classList.add("gap-10");
    prod_card.classList.add("py-4");
    prod_card.classList.add("border-gray-200");
    prod_img.classList.add("w-[112px]");
    left.classList.add("flex");
    left.classList.add("items-center");
    left.classList.add("gap-2");
    right.classList.add("w-full");
    top_div.classList.add("flex");
    top_div.classList.add("w-full");
    top_div.classList.add("items-center");
    top_div.classList.add("justify-between");
    prod_title.classList.add("w-8/12");
    prod_title.classList.add("md:w-10/12");
    prod_title.classList.add("text-xs");
    prod_title.classList.add("sm:text-lg");
    delete2_div.classList.add("delete_div");
    delete2_div.classList.add("md:hidden");
    delete2_div.classList.add("flex");
    delete2_div.classList.add("items-center");
    delete2_div.classList.add("gap-2");
    delete_div.classList.add("delete_div");
    delete_div.classList.add("hidden");
    delete_div.classList.add("md:flex");
    delete_div.classList.add("items-center");
    delete_div.classList.add("gap-2");
    delete2_text.classList.add("delete_text");
    delete2_text.classList.add("font-semibold");
    delete2_text.classList.add("cursor-pointer");
    delete2_text.classList.add("ease-in-out");
    delete2_text.classList.add("duration-300");
    delete2_text.classList.add("hover:opacity-100");
    delete2_text.classList.add("opacity-50");
    delete_text.classList.add("delete_text");
    delete_text.classList.add("font-semibold");
    delete_text.classList.add("cursor-pointer");
    delete_text.classList.add("ease-in-out");
    delete_text.classList.add("duration-300");
    delete_text.classList.add("hover:opacity-100");
    delete_text.classList.add("opacity-50");
    delete2_img.classList.add("w-6");
    delete_img.classList.add("w-6");
    delete2_img.classList.add("h-6");
    delete_img.classList.add("h-6");
    down_div.classList.add("flex");
    down_div.classList.add("justify-between");
    down_div.classList.add("items-center");
    quantity2_div.classList.add("border");
    quantity2_div.classList.add("px-5");
    quantity2_div.classList.add("pb-1");
    quantity2_div.classList.add("flex");
    quantity2_div.classList.add("items-center");
    quantity_div.classList.add("border");
    quantity_div.classList.add("px-5");
    quantity_div.classList.add("pb-1");
    quantity_div.classList.add("flex");
    quantity_div.classList.add("items-center");
    quantity2_minus.classList.add("opacity-70");
    quantity_minus.classList.add("opacity-70");
    quantity2_minus.classList.add("text-2xl");
    quantity_minus.classList.add("text-2xl");
    quantity2_plus.classList.add("opacity-70");
    quantity_plus.classList.add("opacity-70");
    quantity2_main_div.classList.add("flex");
    quantity2_main_div.classList.add("md:hidden");
    quantity2_main_div.classList.add("flex-col");
    quantity2_main_div.classList.add("items-center");
    quantity_main_div.classList.add("hidden");
    quantity_main_div.classList.add("md:flex");
    quantity_main_div.classList.add("flex-col");
    quantity_main_div.classList.add("items-center");
    quantity2_plus.classList.add("text-2xl");
    quantity_plus.classList.add("text-2xl");
    quantity2_num.classList.add("text-sm");
    quantity2_num.classList.add("mt-1");
    quantity_num.classList.add("text-sm");
    quantity_num.classList.add("mt-1");
    quantity2_sum.classList.add("opacity-80");
    quantity_sum.classList.add("opacity-80");
    quantity2_div.classList.add("rounded");
    quantity2_div.classList.add("text-lg");
    quantity2_div.classList.add("gap-5");
    quantity2_div.classList.add("rounded");
    quantity_div.classList.add("text-lg");
    quantity_div.classList.add("gap-5");
    sum_div.classList.add("flex");
    sum_div.classList.add("flex-col");
    sum_div.classList.add("items-end");
    real_sum.classList.add("lg:text-2xl");
    real_sum.classList.add("text-sm");
    real_sum.classList.add("font-semibold");
    fake_sum.classList.add("text-sm");
    fake_sum.classList.add("md:text-base");
    fake_sum.classList.add("line-through");
    fake_sum.classList.add("opacity-60");

    place.append(prod_card, bottom_div);
    bottom_div.append(quantity2_main_div, delete2_div)
    delete2_div.append(delete2_img, delete2_text)
    quantity2_main_div.append(quantity2_div, quantity2_sum)
    quantity2_div.append(quantity2_minus, quantity2_num, quantity2_plus)
    prod_card.append(left, right);
    left.append(input, prod_img);
    right.append(top_div, down_div);
    top_div.append(prod_title, delete_div);
    delete_div.append(delete_img, delete_text);
    down_div.append(saler, quantity_main_div, sum_div);
    quantity_main_div.append(quantity_div, quantity_sum);
    saler.append(saler_span);
    quantity_div.append(quantity_minus, quantity_num, quantity_plus);
    sum_div.append(real_sum, fake_sum);
  }
}
