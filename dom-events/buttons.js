'use strict';
const $button = document.querySelector('.click-button');
if (!$button) throw new Error('button is falsey');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$button.addEventListener('click', handleClick);
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('button is falsey');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('button is falsey');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
  console.log(
    `hello ${event.target}, this is the {data-base.var} for your user profile. `
  );
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
