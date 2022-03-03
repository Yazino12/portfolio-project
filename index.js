// ARRAY OF OBJECTS TO STORE DATA OF THE CARDS

const container = document.querySelector('.projects');

const projects = [
  {
    thumbnail: 'images/card-img1.png',
    name: 'Tonic',
    details: [
      'CANOPY',
      'images/dot.png',
      'Back End Dev',
      'images/dot.png',
      '2015',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    thumbnail: 'images/card-img2.png',
    name: 'Multi-Post Stories',
    details: [
      'CANOPY',
      'images/dot.png',
      'Back End Dev',
      'images/dot.png',
      '2015',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    thumbnail: 'images/card-img3.png',
    name: 'Tonic',
    details: [
      'CANOPY',
      'images/dot.png',
      'Back End Dev',
      'images/dot.png',
      '2015',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    thumbnail: 'images/card-img4.png',
    name: 'Multi-Post Stories',
    details: [
      'CANOPY',
      'images/dot.png',
      'Back End Dev',
      'images/dot.png',
      '2015',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
    tags: ['html', 'css', 'javascript', 'react', 'redux', 'java', 'python'],
    live: 'https://www.microverse.com',
    source: 'https://www.github.com',
  },
];

// CREATING CARDS FROM ARRAY DATA AND POPULATING DYNAMICALLY

projects.forEach((project) => {
  const content = ` <div class="card">
  <a><img class="wallpaper" src=${project.thumbnail} alt="card image 1" /></a>
  <div class="card-part2">
    <div class="project-name">
      <h2>${project.name}</h2>
    </div>
    <div class="card-detail">
      <p class="detail-1">${project.details[0]}</p>
      <img class="detail-2" src=${project.details[1]} alt="bullet image" />
      <span class="detail-3">${project.details[2]}</span>
      <img class="detail-4" src=${project.details[3]} alt="bullet image" />
      <span class="detail-5">${project.details[4]}</span>
    </div>
    <p class="card-description">${`${project.description.substring(
    0,
    150,
  )}.`}</p>
    <p class="card-description1">${project.description}</p>
    <div class="card-lower">
      <div class="card-tags">
        ${project.tags.map((tag) => `<p>${tag}</p>`).join('')}
      </div>
      <button type="submit" class="card-button">See Project</button>
      <hr/>
      <div class="card-actions">
        <a  href=${
  project.live
}><button type="submit" class="actions">See Live<img src="images/card-live.png"/></button></a>
        <a href=${
  project.source
}><button type="submit" class="actions">See Source<img src="images/card-github.png"/></button></a>
      </div>
    </div>
  </div>
</div>`;

  container.innerHTML += content;
});

// CARDS POPUP FUNCTIONALITY

// INITIAL CONDITIONS BEFORE POPUP

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const description1 = card.children[1].children[3];
  const lineBreakElement = card.children[1].children[4].children[2];
  const cardActionElement = card.children[1].children[4].children[3];

  description1.style.display = 'none';
  lineBreakElement.style.display = 'none';
  cardActionElement.style.display = 'none';
});

// HANDLING CARD-BUTTON CLICKS

const cardButtons = document.querySelectorAll('.card-button');

cardButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const card = e.path.filter((el) => el.classList?.contains('card')).at(0);

    const cardsBackground = document.querySelector('.cards-background');
    const imageWrapper = card.children[0];
    const cardDivided = card.children[1];
    const projectName = card.children[1].children[0];
    const title = card.children[1].children[0].children[0];
    const details = card.children[1].children[1];
    const description = card.children[1].children[2];
    const description1 = card.children[1].children[3];
    const seeProjectButton = card.children[1].children[4].children[1];
    const lineBreakElement = card.children[1].children[4].children[2];
    const cardActionElement = card.children[1].children[4].children[3];

    imageWrapper.classList.add('image-wrapper');
    card.classList.add('card-pop');
    projectName.classList.add('card-projectName');
    title.style.width = '60%';
    cardDivided.classList.add('divided');
    description.style.display = 'none';
    description1.style.display = 'block';
    seeProjectButton.style.display = 'none';
    lineBreakElement.style.display = 'block';
    cardActionElement.style.display = 'flex';
    cardsBackground.classList.add('cards-blur', 'blur');
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });

    const closeCardElement = '<a><img class="close-card" src="images/x-grey.png" alt="menu" /></a>';

    card.prepend(projectName, details);
    projectName.innerHTML += closeCardElement;

    const closeCard = document.querySelector('.close-card');

    // HANDLING AND CLOSING CARD POPUP

    closeCard.addEventListener('click', () => {
      imageWrapper.classList.remove('image-wrapper');
      card.classList.remove('card-pop');
      projectName.classList.remove('card-projectName');
      title.style.width = 'auto';
      cardDivided.classList.remove('divided');
      description.style.display = 'block';
      description1.style.display = 'none';
      seeProjectButton.style.display = 'inline-block';
      lineBreakElement.style.display = 'none';
      cardActionElement.style.display = 'none';
      cardsBackground.classList.remove('cards-blur', 'blur');
      closeCard.remove();

      cardDivided.prepend(projectName, details);
    });
  });
});

// BURGER-MENU FUNCTIONALITY

const background = document.querySelector('.mobile-menu-background');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const menu1 = document.querySelector('.close-menu-item1');
const menu2 = document.querySelector('.close-menu-item2');
const menu3 = document.querySelector('.close-menu-item3');
const body = document.querySelector('body');

background.style.display = 'none';

const closePopup = () => {
  body.style.overflow = 'auto';
  background.style.display = 'none';
  background.classList.remove('popUp');
  nav.classList.remove('blur');
  header.classList.remove('blur');
};

burgerMenu.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  background.style.display = 'flex';
  background.classList.add('popUp');
  nav.classList.add('blur');
  header.classList.add('blur');
});

closeMenu.addEventListener('click', () => {
  closePopup();
});

menu1.addEventListener('click', () => {
  closePopup();
});

menu2.addEventListener('click', () => {
  closePopup();
});

menu3.addEventListener('click', () => {
  closePopup();
});
