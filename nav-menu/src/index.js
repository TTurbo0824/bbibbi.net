import './style.css';
import {createElementWithClass as create} from './utilities';

const root = document.querySelector('#root');

const menu = [
  {title: 'Alpha', route: '/alpha', id: 'alpha'},
  {title: 'Bravo', route: '/bravo', id: 'bravo'},
  {title: 'Charlie', route: '/charlie', id: 'charlie'},
  {title: 'Delta', route: '/delta', id: 'delta'},
  {title: 'Echo', route: '/echo', id: 'echo'},
];

const navBar = create('div', 'nav-bar');
const navContainer = create('nav', 'nav-container');

menu.forEach((el) => {
  const navItem = create('span', 'nav-item');
  navItem.id = el.id;
  navItem.innerHTML = el.title;
  navContainer.append(navItem);
});

const clickNav = (e) => {
  console.log(e.target.innerHTML);
};

navContainer.addEventListener('click', (e) => clickNav(e));
const navUnderline = create('div', 'nav-underline');
navContainer.append(navUnderline);
navBar.append(navContainer);
root.append(navBar);

let navItems = document.querySelectorAll('nav span');

// let target = document.getElementById(currentLocation);
// let navB = document.getElementById('nav-bar');
// console.log(navB)

// window.addEventListener('load', () => findTarget());
// window.addEventListener('resize', () => findTarget());
navItems.forEach((menu) =>
  menu.addEventListener('mouseover', (e) => hovering(e))
);

const content = create('div', 'content');

root.append(content);

window.addEventListener('load', () => getPageContent());

const getPageContent = (page) => {
  let contentToReturn;
  switch (page) {
    case 'Alpha':
      contentToReturn = menu[0].route;
    case 'Bravo':
      contentToReturn = menu[1].route;
    case 'Charlie':
      contentToReturn = menu[2].route;
    case 'Delta':
      contentToReturn = menu[3].route;
    case 'Echo':
      contentToReturn = menu[4].route;
    default:
      contentToReturn = menu[0].route;
  }
  content.innerHTML = contentToReturn;
};

// navItems.forEach((menu) =>
//   menu.addEventListener('onclick', () => findTarget())
// );
// navB && navB.addEventListener('mouseleave', () => findTarget());

// const findTarget = () => {
//   navUnderline &&
//     target &&
//     (navUnderline.style.left = target.offsetLeft + 'px');
//   navUnderline &&
//     target &&
//     (navUnderline.style.width = target.offsetWidth + 'px');
// };

const hovering = (e) => {
  navUnderline && (navUnderline.style.left = e.currentTarget.offsetLeft + 'px');
  navUnderline &&
    (navUnderline.style.width = e.currentTarget.offsetWidth + 'px');
  navUnderline &&
    (navUnderline.style.top =
      e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px');
};
