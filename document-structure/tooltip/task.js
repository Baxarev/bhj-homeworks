const hasTooltip = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');
let positionAtr = 'right';
tooltip.classList.add('tooltip');
tooltip.dataset.position = ['positionAtr'];

hasTooltip.forEach(i => i.addEventListener('click', (e) => {
  e.preventDefault();

  tooltip.classList.toggle('tooltip_active');
  tooltip.innerText = e.target.title;
  document.body.append(tooltip);

  
  if (tooltip.getBoundingClientRect().width > e.target.getBoundingClientRect().left) {
    tooltip.dataset.position = 'bottom';
  } else {
    tooltip.dataset.position = positionAtr;
  }

  let flexPixelsY = tooltip.dataset.position === 'top' ? -30 : tooltip.dataset.position === 'bottom' ? 20 : 0;
  let flexPixelsX = tooltip.dataset.position === 'left' ? -tooltip.getBoundingClientRect().width : tooltip.dataset.position === 'right' ? e.target.getBoundingClientRect().width : 0;

  console.log(e.target.getBoundingClientRect().right)

  function setCoordinates() {
    tooltip.style.top = (Math.round(e.target.getBoundingClientRect().top + flexPixelsY) + 'px');
    tooltip.style.left = (e.target.getBoundingClientRect().left + flexPixelsX + 'px');
  }

  setCoordinates();
  window.addEventListener('scroll', () => {
    setCoordinates();
  })
  window.addEventListener('resize', () => {
    setCoordinates();
  })
}))

