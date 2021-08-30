//Switch
let priceToggler = document.querySelector(".priceToggler");
let darkToggler = document.querySelector(".darkToggler");
//Inner text
let price = document.querySelectorAll(".amount");
let duration = document.querySelectorAll(".duration");
//Body section
let darkMode = document.querySelector("#dark-mode");

//Dark switch
darkToggler.onclick = () => {
  darkToggler.classList.toggle("active");
  if (darkToggler.classList.contains("active")) {
    darkMode.classList.toggle("dark-mode");
    darkToggler.classList.toggle("dark-mode-toggler");
  } else {
    darkMode.classList.remove("dark-mode");
    darkToggler.classList.remove("dark-mode-toggler");
  }
};
//Price switch
priceToggler.onclick = () => {
  priceToggler.classList.toggle("active");

  if (priceToggler.classList.contains("active")) {
    for (let i = 0; i < price.length; i++) {
      price[i].innerText = price[i].innerText * 10;
    }
    for (let j = 0; j < duration.length; j++) {
      duration[j].innerText = "/yr";
    }
  } else {
    for (let i = 0; i < price.length; i++) {
      price[i].innerText = price[i].innerText / 10;
    }
    for (let j = 0; j < duration.length; j++) {
      duration[j].innerText = "/mo";
    }
  }
};
