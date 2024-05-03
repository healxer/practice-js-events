const btnEl = document.querySelector('button');

function handleClick() {
    console.log('clicked');
}

if (btnEl) {
  btnEl.addEventListener('click', handleClick);
}
