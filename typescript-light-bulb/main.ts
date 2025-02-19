const $bulb = document.querySelector('.bulb');
if (!$bulb) throw new Error('bulb class does not exist');

// to be true or false;
let state: boolean = true;

function toggle(): void {
  const $bulbWrap = document.querySelector('.bulb-wrap');
  if (!$bulbWrap) throw new Error('bulb wrap class not found');

  if (!$bulb) throw new Error('bulb class does not exist');

  state = !state;

  if (state) {
    // light
    $bulb.className = 'bulb light';
    $bulbWrap.className = 'bulb-wrap light';
  } else {
    // dark
    $bulb.className = 'bulb dark';
    $bulbWrap.className = 'bulb-wrap dark';
  }
}

$bulb.addEventListener('click', toggle);
