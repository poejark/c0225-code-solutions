'use strict';
let clickCount = 0;
const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('hot button does not exist.');
function addTemperature() {
  clickCount += 1;
  console.log(clickCount);
  const $pClick = document.querySelector('.click-count');
  if (!$pClick) throw new Error('p tag does not exist.');
  if (!$hotButton) throw new Error('hot button does not exist2.');
  $pClick.textContent = `Clicks: ${clickCount}`;
  if (clickCount >= 0 && clickCount < 4) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount >= 4 && clickCount < 7) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount >= 7 && clickCount < 10) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount >= 10 && clickCount < 13) {
    $hotButton.className = 'hot-button hot';
  } else if (clickCount >= 13 && clickCount < 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton?.addEventListener('click', addTemperature);
