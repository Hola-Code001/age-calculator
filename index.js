const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const dayResult = document.querySelector(".day-result");
const monthResult = document.querySelector(".month-result");
const yearResult = document.querySelector(".year-result");
const checkButton = document.getElementById("check-button");
const dayError = document.querySelector(".day");
const monthError = document.querySelector(".month");
const yearError = document.querySelector(".year");
const dayErrorText = document.getElementById("day-error-text");
const monthErrorText = document.getElementById("month-error-text");
const yearErrorText = document.getElementById("year-error-text");
const allErrorText = document.querySelector(".all-error");
let letters = /^[A-Za-z]+$/;

const calcAge = () => {
  let birthInput = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
  let currentDate = new Date();
  let birthDate = new Date(birthInput);
  let newDate = new Date(currentDate - birthDate);
  console.log(birthDate);
  console.log(!checkValidDate(birthDate));

  if (isNaN(birthDate)) {
    checkDayError();
    checkYearError();
    checkMonthError();
    checkValidDate(birthDate);

    return;
  }

  let year = newDate.getFullYear() - 1970;
  let month = newDate.getMonth();
  let day = newDate.getDate() - 1;
  yearResult.textContent = year;
  monthResult.textContent = month;
  dayResult.textContent = day;
  checkDayError();
  checkMonthError();
  checkYearError();
  checkValidDate(birthDate);
};

function checkValidDate(date) {
  let confirm = date instanceof Date && !isNaN(date);
  if (!confirm) {
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    dayError.classList.add("error");
    monthError.classList.add("error");
    yearError.classList.add("error");
    allErrorText.textContent = "Must be a vaild date";

    return;
  } else {
    allErrorText.textContent = "";
  }
}

function checkDayError() {
  if (dayInput.value == "") {
    dayErrorText.textContent = "This field is required";
    dayError.classList.add("error");
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    return;
  } else {
    dayErrorText.textContent = "";
    dayError.classList.remove("error");
  }

  if (dayInput.value > 31 || dayInput.value <= 0) {
    dayError.classList.add("error");
    dayErrorText.textContent = "Must be a valid month";
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    return;
  } else {
    dayError.classList.remove("error");
    dayErrorText.textContent = "";
  }
}

function checkMonthError() {
  if (monthInput.value == "") {
    monthError.classList.add("error");
    monthErrorText.textContent = "This field is required";
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    return;
  } else {
    monthError.classList.remove("error");
    monthErrorText.textContent = "";
  }

  if (monthInput.value > 12 || monthInput.value <= 0) {
    monthError.classList.add("error");
    monthErrorText.textContent = "Must be a valid month";
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    return;
  } else {
    monthError.classList.remove("error");
    monthErrorText.textContent = "";
  }
}

function checkYearError() {
  let validYear = new Date();
  validYear = validYear.getFullYear();

  if (yearInput.value == "") {
    yearError.classList.add("error");
    yearErrorText.textContent = "This field is required";
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    return;
  } else {
    yearError.classList.remove("error");
    yearErrorText.textContent = "";
  }

  if (yearInput.value > validYear) {
    yearError.classList.add("error");
    yearErrorText.textContent = "Must be in the past";
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";

    return;
  } else {
    yearError.classList.remove("error");
    yearErrorText.textContent = "";
  }

  if (yearInput.value.match(letters)) {
    yearError.classList.add("error");
    yearErrorText.textContent = "Must be a valid year";
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
    return;
  } else {
    yearError.classList.remove("error");
    yearErrorText.textContent = "";
  }
}

checkButton.addEventListener("click", calcAge);
