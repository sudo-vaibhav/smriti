import '../../partials/goBack/goBack';
import './reminders.add.scss';
import '../../scss/addPages.scss';
import { db } from '../../js/firebase';

window.addEventListener('DOMContentLoaded', () => {
  const addReminderFom = document.querySelector('#add-form');
  addReminderFom.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = addReminderFom['title'].value;
    const time = addReminderFom['reminder-time'].value;
    const description = addReminderFom['description'].value;
    db.collection('reminders')
      .add({
        title,
        time,
        description,
      })
      .then((docRef) => {
        window.location.href = '/reminders';
      });
  });
});
