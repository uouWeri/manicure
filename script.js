const form = document.getElementById('bookingForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  if (!name) return;
  note.textContent = `Спасибо, ${name}! Мы свяжемся с вами в течение дня.`;
  form.reset();
});
