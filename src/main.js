"use strict";
const calcButton = document.querySelector(".js-calculate");
const mAmount = document.querySelector(".js-m-amount");
const mTerm = document.querySelector(".js-mt-term");
const interest = document.querySelector(".js-interest");
const mResult = document.querySelector(".js-result");
const resultSection = document.querySelector(".js-result-section");
const displaySection = document.querySelector(".js-display-section");

calcButton.addEventListener("click", () => {
  //validate the calculator form
    if(mAmount.value == '' && mTerm.value == '') {
    alert("Fill the Mortgage Form")
    return
  }

  if(mAmount.value == '') {
    alert('fill Mortage Amount')
    return;
  } else if (mTerm.value == '') {
    alert('Specify loan term')
    return
  }


  if(mAmount.value !== '' && mTerm.value !== '') {
      displaySection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  const interestRate = Number(interest.value / 100);
  const mAmountValue = Number(mAmount.value);
  const mTermValue = Number(mTerm.value);
  const interestPa = interestRate * mTermValue;
  const interestAmount = mAmountValue * interestPa;

  let monthlyRepayments = Number((
    (interestAmount + mAmountValue) /
    mTermValue /
    12
  ).toFixed(2));

  const formattedMonthlyRepayments = monthlyRepayments.toLocaleString('en-US');

  const mRepayments = `<span>&#x20A6</span>${formattedMonthlyRepayments}`;
  mResult.innerHTML = mRepayments;
  const tResult = document.querySelector(".js-total-result");
  const totalRepayment = (interestAmount + mAmountValue).toLocaleString('en-US');
  tResult.innerHTML = `<span>&#x20A6</span>${totalRepayment}`;
  }
});

//Reset calculator
const clearButton = document.querySelector(".js-clear");
clearButton.addEventListener("click", () => {
  mAmount.value = "";
  mTerm.value = "";
  interest.value = "";
    displaySection.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

//on focus

const maELement = document.querySelector(".js-m-amount");
const maElementContainer = document.querySelector(".js-ma-ElementContainer");
const maTextBackground = document.querySelector(".js-ma-TextBackground");

maELement.addEventListener("focus", () => {
  maElementContainer.classList.add('border-limeColor');
  maTextBackground.classList.add('bg-limeColor');
});

maELement.addEventListener("blur", () => {
  maElementContainer.classList.remove('border-limeColor');
  maTextBackground.classList.remove('bg-limeColor');
});

// mortgage term

const mtElement = document.querySelector(".js-mt-term");
const mtElementContainer = document.querySelector(".js-mt-ElementContainer");
const mtTextBackground = document.querySelector(".js-mt-TextBackground");

mtElement.addEventListener("focus", () => {
  mtElementContainer.classList.add('border-limeColor');
  mtTextBackground.classList.add('bg-limeColor');
});

mtElement.addEventListener("blur", () => {
  mtElementContainer.classList.remove('border-limeColor');
  mtTextBackground.classList.remove('bg-limeColor');
});

//interest rate

const irElement = document.querySelector(".js-interest");
const irElementContainer = document.querySelector(".js-ir-ElementContainer");
const irTextBackground = document.querySelector(".js-ir-TextBackground");

irElement.addEventListener("focus", () => {
  irElementContainer.classList.add('border-limeColor');
  irTextBackground.classList.add('bg-limeColor');
});

irElement.addEventListener("blur", () => {
  irElementContainer.classList.remove('border-limeColor');
  irTextBackground.classList.remove('bg-limeColor');
});


