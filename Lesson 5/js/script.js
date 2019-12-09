let li = document.querySelectorAll(".menu-item"),
  menu = document.querySelector(".menu"),
  lastLi = document.createElement("li"),
  divTitle = document.getElementById("title"),
  column = document.getElementsByClassName("column"),
  divAdv = document.querySelector(".adv"),
  divPrompt = document.getElementById("prompt");

//1)
menu.insertBefore(li[2], li[1]);

lastLi.classList.add("menu-item");
lastLi.textContent = "Пятый пункт";

menu.appendChild(lastLi);
//2)
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

//3)
divTitle.textContent = "Мы продаем только подлинную технику Apple";

//4)
column[1].removeChild(divAdv);
//5)
let answer = prompt("Как вы относитесь к технике apple?", "");
divPrompt.textContent = answer;
