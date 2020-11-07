import './reminders.scss';
import '../scss/actionMenus.scss';
import '../assets/reminder-task-icon.svg';
import '../assets/edit-icon.svg';
import '../partials/goBack/goBack';
import { db } from '../js/firebase';
import '../assets/delete-circle-icon.svg';

// db.collection("reminders").onSnapshot(snapshot)
db.collection('reminders')
  .get()
  .then((querySnapshot) => {
    populateMenuItems(querySnapshot);
  });

function populateMenuItems(querySnapshot) {
  let listHTML = '';
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const reminderListItem = `<li>
                <div class="menu-flexbox-wrapper">
                  <div class="d-flex">
                    <img
                      src="/assets/reminder-task-icon.svg"
                      class="menu-item-image"
                      alt=""
                    />
                    <div class="ml-2">
                      <span style="font-size: 12px; font-weight: bold">
                        ${data.title}</span
                      >
                      <p style="font-size: 10px">
                        ${data.description}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <img src="/assets/delete-circle-icon.svg" class="item-delete-icon" data-id="${doc.id}" alt=""/>
                  </div>
                </div>
              </li>`;

    listHTML += reminderListItem;
    console.log(`${doc.id} => ${doc.data()}`);
  });
  const menuUL = document.querySelector('#menu-unordered-list');
  menuUL.innerHTML = listHTML;
  menuUL.querySelectorAll('.item-delete-icon').forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', () => {
      deleteMenuItem(deleteIcon.dataset['id']);
    });
  });
}

function deleteMenuItem(id) {
  const collectionName = document.querySelector('#menu-unordered-list').dataset[
    'collection'
  ];
  db.collection(collectionName)
    .doc(id)
    .delete()
    .then(() => {
      window.location.href = '/' + collectionName;
    });
}
