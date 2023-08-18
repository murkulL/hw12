
document.addEventListener('DOMContentLoaded', function() {

  const img = document.querySelector('img');
  img.style.display = 'none'

  const value = document.querySelector('#value');
  const buttonsContainer = document.querySelector('.button-container')
  let count = 0;

    buttonsContainer.addEventListener('click', (event) => {
    const buttonName = event.target.dataset.action;
    if(buttonName === 'increase'){
      count += 1;
      value.innerHTML = count;
      color(count)
    }
    if(buttonName === 'decrease'){
      count -= 1;
      value.innerHTML = count;
      color(count)
    }
    if(buttonName === 'reset'){
      count = 0;
      value.innerHTML = count;
      color(count)
    }
  })

  function color(count) {
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  }
  const buttons = document.querySelectorAll('.btn'); 

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      img.style.display = 'block'
      changeButtonPosition(button);
    });
  });

  function changeButtonPosition(button) {
    const randomX = Math.random() * (window.innerWidth - button.clientWidth);
    const randomY = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }
});
