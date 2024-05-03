function mouseOver() {
  console.log('Mouse is over the div');
}

function mouseOut() {
  console.log('Mouse is out of the div');
}

document.addEventListener('DOMContentLoaded', () => {
  const divEl = document.querySelector('div');
  if (divEl) {
    divEl.addEventListener('mouseover', mouseOver);
    divEl.addEventListener('mouseout', mouseOut);
  }
});
