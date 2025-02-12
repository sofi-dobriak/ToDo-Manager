import { DotLottie } from '@lottiefiles/dotlottie-web';

const canvas = document.querySelector('#dotlottie-canvas');
let dotLottie; // Збережемо інстанс Lottie

function resizeCanvas() {
  if (!canvas.parentElement) return;

  const parent = canvas.parentElement;
  const pixelRatio = window.devicePixelRatio || 1; // Визначаємо піксельний масштаб

  const width = parent.clientWidth;
  const height = (width * 9) / 16;

  // Встановлюємо правильні розміри canvas
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  if (dotLottie) {
    dotLottie.load(
      'https://lottie.host/417618a6-2cb7-461c-9de3-6f8e5f3e50c2/4DNAzjSaoo.lottie'
    );
    initLottie();
  }
}

export function initLottie() {
  dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: 'https://lottie.host/417618a6-2cb7-461c-9de3-6f8e5f3e50c2/4DNAzjSaoo.lottie',
  });
}

resizeCanvas();
initLottie();

window.addEventListener('resize', resizeCanvas);
