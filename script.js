const holes = document.querySelectorAll('.hole');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  holes.forEach(hole => {
    const speed = parseFloat(hole.dataset.speed);
    hole.style.transform = `translateY(${-scrollY * speed}px)`; // ← ここをマイナスに！
  });
});
