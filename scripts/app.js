let BTNEL = document.querySelectorAll('.FAQ-button');
let answer = document.querySelectorAll('.FAQ-content');

BTNEL.forEach((BTN, index) => {
  BTN.addEventListener('click', () => {
    answer[index].classList.toggle('answer');
  });
});