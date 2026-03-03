/* ============================================================
   JAVASCRIPT MÍNIMO — apenas comportamentos que CSS não resolve
============================================================ */

/* Sombra na nav ao rolar */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('elevada', window.scrollY > 20);
}, { passive: true });

/* Barra de progresso de scroll */
const barra = document.getElementById('progresso');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  barra.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}, { passive: true });

/* Animações ao entrar na viewport */
const obs = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.animar').forEach(el => obs.observe(el));

/* Fechar menu mobile ao clicar em link */
function fecharMenu() {
  document.getElementById('nav-toggle').checked = false;
}

/* Formulário — feedback de envio */
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando…';
  btn.disabled = true;
  setTimeout(() => {
    this.reset();
    btn.style.display = 'none';
    document.getElementById('form-ok').style.display = 'block';
  }, 1200);
});
