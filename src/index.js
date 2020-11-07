import './assets/ladki.png';
import './assets/profile-icon.svg';
import './assets/send-icon.svg';
import './scss/index.scss';
import './assets/time-icon.svg';
import './assets/phone-icon.svg';
import './assets/home-icon.svg';
import './assets/reminder-blue-icon.svg';
import pushCard from './js/pushCard';

window.addEventListener('DOMContentLoaded', () => {
  const primaryActionsContainer = document.querySelector(
    '#primary-actions-container'
  );
  const primaryActions = primaryActionsContainer.querySelectorAll('.badge');
  primaryActions.forEach((primaryAction) => {
    primaryAction.addEventListener('click', () => {
      pushCard(primaryAction.innerText);
    });
  });
});
