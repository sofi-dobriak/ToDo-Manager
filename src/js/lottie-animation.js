import { DotLottie } from '@lottiefiles/dotlottie-web';

const canvas = document.querySelector('#dotlottie-canvas');
let dotLottie = null;

function resizeCanvas() {
  if (!canvas.parentElement) return;

  const parent = canvas.parentElement;
  const pixelRatio = window.devicePixelRatio || 1;

  const width = parent.clientWidth;
  const height = (width * 9) / 16;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  if (dotLottie) {
    dotLottie.resize(true);
  }
}

export function initLottie() {
  if (!dotLottie) {
    dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: canvas,
      src: 'https://lottie.host/417618a6-2cb7-461c-9de3-6f8e5f3e50c2/4DNAzjSaoo.lottie',
    });
  } else {
    dotLottie.play();
  }
}

export function destroyLottie() {
  if (dotLottie) {
    dotLottie.destroy();
    dotLottie = null;
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
