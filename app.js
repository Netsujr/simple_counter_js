// innitial count
let count = 0;

const value = document.querySelector('#value');
const buttons = querySelector('.btn');
// console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    console.log(event.currentTarget.classList);
  });
});
