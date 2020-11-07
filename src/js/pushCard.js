const config = {
  'Who is this?': {
    image: '/assets/ladki.png',
  },
  'What is the current time?': {
    image: '/assets/time-icon.svg',
    inverted: true,
  },
  'Where do I live?': {
    image: '/assets/home-icon.svg',
    title: 'B-4/42A, Keshav Puram, Lawrence Road, Delhi-35',
    cta: {
      text: 'Book a Cab',
      link: encodeURI(
        `https://book.olacabs.com/?pickup_name=Current Location&drop_name=B-4/42A, Keshav Puram, Lawrence Road, Delhi-35`
      ),
      target: '_blank',
    },
  },
  'What are my upcoming activities?': {
    image: '/assets/reminder-blue-icon.svg',
  },
  'Call my caretaker': {
    image: '/assets/phone-icon.svg',
    title: 'Prateek Devashetti',
    primaryText: '+91 7875355798',
    cta: {
      text: 'Call my caretaker',
      link: 'tel:7875355798',
    },
  },
};
export default (query, givenConfig = {}) => {
  const cardConfig = { ...config[query], ...givenConfig };
  switch (query) {
    case 'What is the current time?':
      const timestamp = new Date();
      cardConfig.title = timestamp.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      cardConfig.primaryText = timestamp.toString();
      break;
  }
  let cardHTML = `
    <div class="card shadow response-card w-100 ${
      cardConfig.inverted ? 'inverted' : ''
    }">
            <div class="card-body">
              <h6 class="card-subtitle mb-2">${query}</h6>
              <div class="row align-items-center">
                <div class="col-7">
                  <h5 class="card-title">${cardConfig.title || ''}</h5>
                  <p class="card-text">
                    ${cardConfig.primaryText || ''}
                  </p>
                </div>
                <div class="col-5">
                  <img src="${cardConfig.image}" class="w-100" alt="" />
                </div>
              </div>
              ${
                cardConfig.cta
                  ? `<a
                  href="${cardConfig.cta.link}"
                  class="btn btn-outline-primary curved"
                  target="${cardConfig.cta.target || ''}"
                >
                  ${cardConfig.cta.text}
                </a>`
                  : ''
              }
          </div>
    </div>
  `;
  const messagesContainer = document.querySelector('#messages-container');

  messagesContainer.insertAdjacentHTML('beforeend', cardHTML);
  messagesContainer.scrollIntoView(false);
};
