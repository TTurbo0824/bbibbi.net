import './style.css';
import { createElementWithClass as create, historyRouterPush } from './utilities';

const root = document.querySelector('#root');
const navBar = create('div', 'nav-bar');
const navContainer = create('nav', 'nav-container');

const options = [
  { title: 'Alpha', route: '/alpha', id: 'alpha' },
  { title: 'Bravo', route: '/bravo', id: 'bravo' },
  { title: 'Charlie', route: '/charlie', id: 'charlie' },
  { title: 'Delta', route: '/delta', id: 'delta' },
  { title: 'Echo', route: '/echo', id: 'echo' }
];

options.forEach((el) => {
  const navItem = create('span', 'nav-item');
  navItem.id = el.id;
  navItem.innerHTML = el.title;
  navContainer.append(navItem);
});

navContainer.addEventListener('click', (e) => clickNavItem(e));
const navUnderline = create('div', 'nav-underline');
navContainer.append(navUnderline);
navBar.append(navContainer);
root.append(navBar);

const navItems = document.querySelectorAll('nav span');
const currentLocation = window.location.pathname.split('/')[1];
let target = document.getElementById(currentLocation);

navItems.forEach((el) => el.addEventListener('mouseover', (e) => hovering(e)));

const content = create('div', 'content');
content.id = 'content';
root.append(content);

window.addEventListener('load', () => findTarget());
window.addEventListener('load', () => getPageContent());
navBar && navBar.addEventListener('mouseleave', () => findTarget());

const getPageContent = (page) => {
  let contentToReturn;
  switch (page) {
    case 'Alpha':
      historyRouterPush(options[0].route);
      contentToReturn = page;
      break;
    case 'Bravo':
      historyRouterPush(options[1].route);
      contentToReturn = page;
      break;
    case 'Charlie':
      historyRouterPush(options[2].route);
      contentToReturn = page;
      break;
    case 'Delta':
      historyRouterPush(options[3].route);
      contentToReturn = page;
      break;
    case 'Echo':
      historyRouterPush(options[4].route);
      contentToReturn = page;
      break;
    default:
      let routeIdx = 0;
      options.forEach((el, idx) => {
        if (window.location.pathname === el.route) routeIdx = idx;
      });
      historyRouterPush(options[routeIdx].route);
      contentToReturn = options[routeIdx].title;
      break;
  }
  document.getElementById('content').innerHTML = contentToReturn;
};

const findTarget = () => {
  if (!target) target = document.getElementById('alpha');
  navUnderline.style.left = target.offsetLeft + 'px';
  navUnderline.style.width = target.offsetWidth + 'px';
};

const hovering = (e) => {
  navUnderline && (navUnderline.style.left = e.currentTarget.offsetLeft + 'px');
  navUnderline && (navUnderline.style.width = e.currentTarget.offsetWidth + 'px');
  navUnderline &&
    (navUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px');
};

const clickNavItem = (e) => {
  if (e.target.innerHTML.length < 10) {
    getPageContent(e.target.innerHTML);
    target = document.getElementById(window.location.pathname.split('/')[1]);
  }
};
