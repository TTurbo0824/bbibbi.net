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

const navContainer = create('nav', 'nav-container');
menu.forEach(
  (el) => {
    const navItem = create('span', 'nav-item');
    navItem.innerHTML = el.title;
    navContainer.append(navItem)
  }
);

root.append(navContainer);
let navUnderline = document.getElementById('nav-underline');
let navItems = document.querySelectorAll('nav span');
let target = document.getElementById(currentLocation);
let navB = document.getElementByC('nav-bar');
window.addEventListener('load', () => findTarget());
window.addEventListener('resize', () => findTarget());
navItems.forEach((menu) =>
  menu.addEventListener('mouseover', (e) => hovering(e))
);
navItems.forEach((menu) =>
  menu.addEventListener('onclick', () => findTarget())
);
navB && navB.addEventListener('mouseleave', () => findTarget());

const findTarget = () => {
  navUnderline &&
    target &&
    (navUnderline.style.left = target.offsetLeft + 'px');
  navUnderline &&
    target &&
    (navUnderline.style.width = target.offsetWidth + 'px');
};

const hovering = (e) => {
  navUnderline && (navUnderline.style.left = e.currentTarget.offsetLeft + 'px');
  navUnderline &&
    (navUnderline.style.width = e.currentTarget.offsetWidth + 'px');
  navUnderline &&
    (navUnderline.style.top =
      e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px');
};
