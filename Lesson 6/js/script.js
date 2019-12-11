"use strict";

let buttonStart = document.getElementById('start'), //1
  divBudgetValue = document.getElementsByClassName('budget-value'), //2
  divDayBudgetValue = document.getElementsByClassName('daybudget-value'),
  divLevelValue = document.getElementsByClassName('level-value'),
  divExpensesValue = document.getElementsByClassName('expenses-value'),
  divOptExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
  divIncomeValue = document.getElementsByClassName('income-value'),
  divMonthSavingsValue = document.getElementsByClassName('monthsavings-value'),
  divYearSavingsValue = document.getElementsByClassName('yearsavings-value'), //3
  inputsExpensesItem = document.getElementsByClassName('expenses-item'), //4
  buttonApproveFirst = document.getElementsByTagName('button')[0],
  buttonApproveSecond = document.getElementsByTagName('button')[1],
  buttonCalculate = document.getElementsByTagName('button')[2], //5
  inputsOptExpensesItem = document.querySelectorAll('.optionalexpenses-item'), //6
  inputChooseIncome = document.querySelector('.choose-income'),
  inputSavingsCheckbox = document.querySelector('#savings'),
  inputChooseSum = document.querySelector('.choose-sum'),
  inputChoosePercent = document.querySelector('.choose-percent'),
  inputYearValue = document.querySelector('.year-value'),
  inputMonthValue = document.querySelector('.month-value'),
  inputDayValue = document.querySelector('.day-value');

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

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