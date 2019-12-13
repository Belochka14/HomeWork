"use strict";

let startBtn = document.getElementById('start'),
  //1
  budgetValue = document.getElementsByClassName('budget-value')[0],
  //2
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
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
  dayValue = document.querySelector('.day-value');

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
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

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
      sum += +b;
    } else {
      console.log("bad result");
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optExpensesItem.length; i++) {
    let a = optExpensesItem[i].value;

    appData.optionalExpenses[i] = a;
    console.log(appData.optionalExpenses[i]);
    optExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }

});

countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {

    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка!";
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
      levelValue.textContent = "Средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка!";
    } else {
      levelValue.textContent = "Произошла ошибка!";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка!";

  }
});

incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  if (typeof items === "string" && typeof items != null && items != "") {
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {

  },
  detectDayBudget: function () {
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {

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