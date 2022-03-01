'use strict';

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
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    thumbnail: 'images/card-img3.png',
    name: 'Multi-Post Stories',
    details: [
      'CANOPY',
      'images/dot.png',
      'Back End Dev',
      'images/dot.png',
      '2015',
    ],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    thumbnail: 'images/card-img4.png',
    name: 'CANOPY',
    details: [
      'CANOPY',
      'images/dot.png',
      'Back End Dev',
      'images/dot.png',
      '2015',
    ],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript', 'react'],
    live: '',
    source: '',
  },
];

projects.forEach((project, i) => {
  const content = ` <div class="card">
  <a><img class="wallpaper" src=${project.thumbnail} alt="card image 1" /></a>
  <div class="card-part2">
    <h2 class="project-name">${project.name}</h2>
    <div class="card-detail">
      <p class="detail-1">${project.details[0]}</p>
      <img class="detail-2" src=${project.details[1]} alt="bullet image" />
      <span class="detail-3">${project.details[2]}</span>
      <img class="detail-4" src=${project.details[3]} alt="bullet image" />
      <span class="detail-5">${project.details[4]}</span>
    </div>
    <p class="card-description">${project.description}</p>
    <div class="card-tags">
    ${project.tags.map((tag) => `<p>${tag}</p>`).join('')}
      </div>
    <button type="submit" class="card-button">See Project</button>
  </div>
</div>`;

  container.innerHTML += content;
});

// BURGER-MENU-FUNCTIONALITY

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
