let li = document.createElement("li"),
    menu = document.querySelector(".menu"),
    x = document.body,
    divTitle = document.getElementById("title");


menu.appendChild(li);
li.classList.add("menu-item");
li.textContent = "Пятый пункт";

x.style.background = "url(img/apple_true.jpg) center no-repeat";

divTitle.textContent = "Мы продаем только подлинную технику Apple";