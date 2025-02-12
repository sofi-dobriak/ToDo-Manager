import { DotLottie } from '@lottiefiles/dotlottie-web';

const canvas = document.querySelector('#dotlottie-canvas');

function resizeCanvas() {
  const parent = canvas.parentElement;
  const width = parent.clientWidth;
  const height = canvas.width * (9 / 16);
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

const dotLottie = new DotLottie({
  autoplay: true,
  loop: true,
  canvas: document.querySelector('#dotlottie-canvas'),
  src: 'https://lottie.host/417618a6-2cb7-461c-9de3-6f8e5f3e50c2/4DNAzjSaoo.lottie',
});
