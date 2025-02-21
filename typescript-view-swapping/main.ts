const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('tab-container class not found. ');

const $tabs = document.getElementsByClassName('tab');
if (!$tabs) throw new Error('tab classes not found. ');

const $views = document.getElementsByClassName('view');
if (!$views) throw new Error('view classes not found');

function handleClick(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      const $currTab = $tabs[i] as HTMLDivElement;
      if ($currTab.getAttribute('id') === $eventTarget.getAttribute('id')) {
        $currTab.className = 'tab active';
        // console.log($eventTarget.dataset.view);

        for (let j = 0; j < $views.length; j++) {
          const $currView = $views[j] as HTMLDivElement;
          if ($currView.dataset.view === $currTab.dataset.view) {
            $currView.className = 'view';
          } else {
            $currView.className = 'view hidden';
          }
        }
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
