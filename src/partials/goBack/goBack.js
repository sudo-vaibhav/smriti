import '../../assets/back-button.svg';
window.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('#nav-back-button');
  backButton.addEventListener('click', () => {
    window.history.back();
  });
});
