const config = {
  'Who is this?': {},
  'What is the current time?': {
    image: '/assets/time-icon.svg',
    inverted: true,
  },
  'Where do I live?': {
    image: '/assets/home-icon.svg',
  },
  'What are my upcoming activities?': {
    image: '/assets/reminders-icon.svg',
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
export default (query) => {
  const defaultConfig = config[query];
  let cardHTML = `
    <div class="card shadow response-card ${
      defaultConfig.inverted ? 'inverted' : ''
    }">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">${query}</h6>
              <div class="row align-items-center">
                <div class="col-7">
                  <h5 class="card-title">${defaultConfig.title}</h5>
                  <p class="card-text">
                    ${defaultConfig.primaryText}
                  </p>
                </div>
                <div class="col-5">
                  <img src="/assets/ladki.png" class="w-100" alt="" />
                </div>
              </div>
              <a href="${
                defaultConfig.cta.link
              }" class="btn btn-outline-primary curved"
                >${defaultConfig.cta.text}</a
              >
          </div>
    </div>
  `;
  document
    .querySelector('#messages-container')
    .insertAdjacentHTML('beforeend', cardHTML);
};
