"use strict";const btn=document.querySelector(".theme-icon-wrapper"),link=document.getElementById("theme");function changeTheme(){"css/dark.css"===link.getAttribute("href")?(link.setAttribute("href","css/light.css"),localStorage.setItem("theme","light")):(link.setAttribute("href","css/dark.css"),localStorage.setItem("theme","dark"))}"light"===localStorage.getItem("theme")?link.setAttribute("href","css/light.css"):"dark"===localStorage.getItem("theme")&&link.setAttribute("href","css/dark.css"),btn.addEventListener("click",(function(){changeTheme()}));