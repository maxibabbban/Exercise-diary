// Lägg ripple-effekt på alla knappar
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Skapa ripple-element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    // Sätt storlek utifrån knappens största dimension
    const size = Math.max(this.offsetWidth, this.offsetHeight);
    ripple.style.width = ripple.style.height = size + 'px';

    // Beräkna position så ripple startar där användaren klickar
    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top  = (e.clientY - rect.top  - size/2) + 'px';

    // Ta bort ripple när animationen är klar
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});