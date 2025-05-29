"use strict";
//Make the focus on the inputElement
const inputELement = document.querySelectorAll(".js-input");
const inputElementContainer = document.querySelector(".js-inputElementContainer");


inputELement.forEach((input) => {
  input.addEventListener("click", () => {
    const man = document.querySelector('.js-input');
    man.closest('.js-inputElementContainer').style.borderColor = 'yellow'

    // inputElementContainer.forEach((container) => {
    //   container.style.borderColor = "hsl(61, 70%, 52%)";
    // });
    // const inputTextBackground = document.querySelectorAll(
    //   ".js-inputTextBackground "
    // );
    // inputTextBackground.forEach((background) => {
    //   background.style.backgroundColor = "hsl(61, 70%, 52%)";
    // });
  });
});
