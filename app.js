// innitial count
let count = 0;

const ken = document.querySelector('#ken')
const ryu = document.querySelector('#ryu')
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
// console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    // console.log(event.currentTarget.classList);
    const styles = event.currentTarget.classList;
    if(styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0){
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count == 0) {
      value.style.color = 'var(--clr-grey-1)';
    }
    if (count == 3) {
      ken.style.display = 'inline';
    } else {
      ken.style.display = 'none';
    }
    if (count == -3) {
      ryu.style.display = 'inline';
    } else {
      ryu.style.display = 'none';
    }



    value.textContent = count;
  });
});
