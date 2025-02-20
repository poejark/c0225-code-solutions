'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('form not found');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  console.log($formElements.name.value);
  const MessageData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(MessageData);
  $contactForm.reset();
});
