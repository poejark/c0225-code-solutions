'use strict';
let phrase = 'Lorem ipsum odor amet, consectetuer adipiscing elit.';
let phraseArray = phrase.split('');
let gameStart = false;
let i = 0;
let $spans;
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('class open-modal does not exist.');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('class dismiss-modal does not exist.');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog element does not exist.');
$openModal.addEventListener('click', () => $dialog.showModal());
// instead of closing the modal, should also run generateGame and load and start the game.
function closeDialog(event) {
  event.preventDefault();
  const $formInput = document.getElementById('string-input');
  if (!$formInput) throw new Error('no form input detected');
  phrase = $formInput.value;
  phraseArray = phrase.split('');
  generateGame();
  $dialog?.close();
}
$dismissModal.addEventListener('click', closeDialog);
// more comprehensive features would include inputting the phrase in a FormData, and hitting the start button to play
// function keyCheck(event: KeyboardEvent): void {
//   if (!gameStart) {
//     return;
//   }
//   const $currentSpan =
//   if (event.key === $spans[i].textContent)
// }
function checkKey(event) {
  if (gameStart) {
    if (i > $spans.length) {
      console.log('you Win!');
      gameStart = false;
    }
    if (event.key === $spans[i].textContent) {
      $spans[i].className = 'letter pass';
      i++;
      $spans[i].className = 'letter current';
    } else {
      $spans[i].className = 'letter wrong';
    }
  }
}
function generateGame() {
  // console.log(phrase);
  const $phraseWrap = document.querySelector('.phrase-wrapper');
  if (!$phraseWrap) throw new Error('no phrase wrapper exists');
  for (const s of phraseArray) {
    // console.log(s);
    const $letterSpan = document.createElement('span');
    $letterSpan.textContent = s;
    $letterSpan.className = 'letter open';
    $phraseWrap.appendChild($letterSpan);
  }
  $spans = document.getElementsByTagName('span');
  if (!$spans) throw new Error('no input found.');
  gameStart = true;
  i = 0;
  $spans[i].className = 'letter current';
  document.addEventListener('keydown', checkKey);
}
