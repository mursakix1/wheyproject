const cheeseBg = document.querySelector('.cheese-bg');

// 穴を30個自動生成
for (let i = 0; i < 30; i++) {
  const hole = document.createElement('div');
  const sizeClass = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
  const speed = (Math.random() * 1.5 + 0.1).toFixed(2); // 0.1〜1.6くらい
  const top = Math.random() * 3000; // 高さはページ全体
  const left = Math.random() * 100; // 横は % 指定

  hole.classList.add('hole', sizeClass);
  hole.dataset.speed = speed;
  hole.style.top = `${top}px`;
  hole.style.left = `${left}%`;

  cheeseBg.appendChild(hole);
}

// スクロール連動のパララックス効果（逆方向）
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.hole').forEach(hole => {
    const speed = parseFloat(hole.dataset.speed);
    hole.style.transform = `translateY(${-scrollY * speed}px)`;
  });
});
