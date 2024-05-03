const buttons = document.querySelectorAll('button');
const text = 'clicked';

function handleClick(e) {
  const element = e.currentTarget;
  element.innerText = text;
  console.log('clicked');
  element.removeEventListener('click', handleClick);
}

buttons.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
