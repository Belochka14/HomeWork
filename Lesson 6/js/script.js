"use strict";

let startBtn = document.getElementById('start'),
  //1
  budgetValue = document.getElementsByClassName('budget-value')[0],
  //2
  dayBudgetValue = document.getElementsByClassName('daybudget-value'),
  levelValue = document.getElementsByClassName('level-value'),
  expensesValue = document.getElementsByClassName('expenses-value'),
  optExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
  incomeValue = document.getElementsByClassName('income-value'),
  monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
  yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
  //3
  expensesItem = document.getElementsByClassName('expenses-item'),
  //4
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  //5
  optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  //6
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value')[0];

let money, time;

startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue = new Date(Date.parse(time)).getFullYear();
  monthValue = new Date(Date.parse(time)).getMonth() + 1;
  dayValue = new Date(Date.parse(time)).getDay();

});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let a = prompt("Статья необязательных расходов?", "");

      appData.optionalExpenses[i + 1] = a;
      console.log(appData.optionalExpenses[i + 1]);
    }
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (Перечислете через запятую)", "");
    if (typeof items === "string" && typeof items != null && items != "") {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то ещё?", ""));
      appData.income.sort();
    } else {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    }

    appData.income.forEach(function (item, index) {
      console.log("Способ доп. заработка: " + (index + 1) + " " + item);

    });
  }

};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}