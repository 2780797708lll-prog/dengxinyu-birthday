const lockScreen = document.querySelector('#lockScreen');
const revealScreen = document.querySelector('#revealScreen');
const form = document.querySelector('#unlockForm');
const input = document.querySelector('#password');
const error = document.querySelector('#errorMessage');
const confetti = document.querySelector('#confetti');

function makeConfetti() {
  const colors = ['#168fea', '#38c8df', '#65c97c', '#baf2d0', '#f5a7c5'];
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 56; i += 1) {
    const piece = document.createElement('span');
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--time', `${2.7 + Math.random() * 2.7}s`);
    piece.style.setProperty('--delay', `${Math.random() * .65}s`);
    piece.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
    piece.style.setProperty('--rotation', `${Math.random() * 180}deg`);
    fragment.appendChild(piece);
  }
  confetti.appendChild(fragment);
}

function unlock() {
  lockScreen.hidden = true;
  revealScreen.classList.add('is-visible');
  revealScreen.setAttribute('aria-hidden', 'false');
  makeConfetti();
  document.title = '邓心语，生日快乐！';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (value === '10.25' || value === '1025') {
    error.textContent = '';
    unlock();
    return;
  }
  error.textContent = '密码不对，再想想她的生日吧～';
  form.classList.remove('shake');
  void form.offsetWidth;
  form.classList.add('shake');
  input.select();
});

input.addEventListener('input', () => { error.textContent = ''; });
