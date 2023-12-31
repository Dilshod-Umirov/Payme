"use strict";

let USERS = [
  {
    firstName: "DIlshodbek",
    lastName: "Umirov2006",
    username: "Dilshodbek",
    password: "Umirov2006",
    card: {
      cardTaype: "Visa",
      balans: 20000,
      fullName: "Dilshodbek Umirov",
      cardNumber: 1234_5678_9756_1456,
      expiredDate: "01 / 27",
    },
  },
  
];

let USER = null;

let isVerify = false;

//pages

const loginPage = document.querySelector(".login-page");
const paymentPage = document.querySelector(".payment-app");
const alllHistory = document.querySelector(".all-history");

// input

const loginInput = document.querySelector(".login-input");
const passwordInput = document.querySelector(".password-input");
const transferCardNumInput = document.querySelector(".transfer-card-num");
const transferAmountInput = document.querySelector(".transfer-amount");

// buttons
const loginButton = document.querySelector(".login-button");
const logOutButton = document.querySelector(".log-out-btn");
const transferBtn = document.querySelector(".transfer-btn");
// elements

const title = document.querySelector(".title");
const cardTaype = document.querySelector(".card-type");
const balans = document.querySelector(".amount");
const cardFullName = document.querySelector(".fullName");
const cardNumber = document.querySelector(".card-number");
const cardExpiredDate = document.querySelector(".card-expired-date");

// custom

const formatCardNumber = (cardNum) => {
  cardNum = cardNum.toString();
  const arr = [];
  for (let i = 0; i < cardNum.length; i += 4) {
    arr.push(cardNum.slice(i, i + 4));
  }
  return arr.join(" ");
};

const writerOfCardInfo = () => {
  cardTaype.textContent = USER.card.cardTaype;
  balans.textContent = USER.card.balans.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  cardFullName.textContent = USER.card.fullName;
  cardNumber.textContent = formatCardNumber(USER.card.cardNumber);
  cardExpiredDate.textContent = USER.card.expiredDate;
};

// event

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginInput.value.trim();
  const password = passwordInput.value.trim();
  USERS.forEach((u) => {
    if (u.username === username && u.password === password) {
      USER = u;
      isVerify = true;
    }
  });
  if (!isVerify) {
    alert("Xatolik bor!!!!!!!");
    return;
  }
  loginInput.value = "";
  passwordInput.value = "";

  paymentPage.classList.remove("hidden");
  loginPage.classList.add("hidden");
  title.textContent = Xush kelibsiz, ${USER.firstName} !;
  writerOfCardInfo();
});

transferBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const trCardNum = +transferCardNumInput.value.replaceAll(/[^0-9]/g, "");
  const trAmount = +transferAmountInput.value.trim();