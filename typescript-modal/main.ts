const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('class open-modal does not exist.');

const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('class dismiss-modal does not exist.');

const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog element does not exist.');

$openModal.addEventListener('click', () => $dialog.showModal());

$dismissModal.addEventListener('click', () => $dialog.close());
