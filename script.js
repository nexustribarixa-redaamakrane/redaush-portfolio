document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('showMessage');
  const msg = document.getElementById('secretMessage');

  btn.addEventListener('click', () => {
    if (msg.style.display === 'none') {
      msg.style.display = 'block';
    } else {
      msg.style.display = 'none';
    }
  });
});
