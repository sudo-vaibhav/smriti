import '../../assets/image-input-icon.svg';
import '../../scss/addPages.scss';

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
