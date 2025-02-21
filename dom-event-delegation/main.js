'use strict';
const $lister = document.querySelector('.task-list');
if (!$lister) throw new Error('task-list class does not exist. ');
$lister?.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log(eventTarget);
  console.log(eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $nearestListItem = eventTarget.closest('.task-list-item');
    console.log($nearestListItem);
    $nearestListItem?.remove();
  }
});
