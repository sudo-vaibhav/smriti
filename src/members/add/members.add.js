import '../../assets/image-input-icon.svg';
import '../../scss/addPages.scss';
import '../../partials/goBack/goBack';
import { db, storage } from '../../js/firebase';
document
  .querySelector('#member-image-input')
  .addEventListener('change', (e) => {
    document.querySelector('#image-upload-button').innerText = 'Uploaded';
    const files = e.target.files;
    const fr = new FileReader();
    fr.onload = () => {
      document.querySelector('#member-image').src = fr.result;
    };
    fr.readAsDataURL(files[0]);
    document.querySelector('#form-submit-button').disabled = false;
  });

console.log(db, storage);
