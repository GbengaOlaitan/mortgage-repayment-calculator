"use strict";
const calcButton = document.querySelector(".js-calculate");
const mAmount = document.querySelector(".js-m-amount");
const mTerm = document.querySelector(".js-m-term");
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
  const monthlyRepayments = (
    (interestAmount + mAmountValue) /
    mTermValue /
    12
  ).toFixed(2);
  const mRepayments = `<span>&#x20A6</span>${monthlyRepayments}`;
  mResult.innerHTML = mRepayments;
  const tResult = document.querySelector(".js-total-result");
  const totalRepayment = interestAmount + mAmountValue;
  tResult.innerHTML = `<span>&#x20A6</span>${totalRepayment}`;
  }
});

//Reset calculator
const clearButton = document.querySelector(".js-clear");
clearButton.addEventListener("click", () => {
  mAmount.value = "";
  mTerm.value = "";
    displaySection.classList.remove("hidden");
  resultSection.classList.add("hidden");
});
