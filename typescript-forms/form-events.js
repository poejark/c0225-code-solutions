'use strict';
function handleFocus(event) {
  console.log('the focus event was fired');
  const $eventTarget = event.target;
  console.log($eventTarget.name);
}
function handleBlur(event) {
  console.log('the blur event was fired');
  const $eventTarget = event.target;
  console.log($eventTarget.name);
}
function handleInput(event) {
  const $eventTarget = event.target;
  console.log('event target name: ', $eventTarget.name);
  console.log('event target value: ', $eventTarget.value);
}
const $form = document.querySelector('#contact-form');
if (!$form) throw new Error('$form is null.');
const $formNameInput = $form['user-name'];
const $formEmailInput = $form.email;
const $formMessageInput = $form.message;
if (!$formNameInput || !$formEmailInput || !$formMessageInput)
  throw new Error('one of the form elements are missing.');
$formNameInput.addEventListener('focus', handleFocus);
$formNameInput.addEventListener('blur', handleBlur);
$formNameInput.addEventListener('input', handleInput);
$formEmailInput.addEventListener('focus', handleFocus);
$formEmailInput.addEventListener('blur', handleBlur);
$formEmailInput.addEventListener('input', handleInput);
$formMessageInput.addEventListener('focus', handleFocus);
$formMessageInput.addEventListener('blur', handleBlur);
$formMessageInput.addEventListener('input', handleInput);
