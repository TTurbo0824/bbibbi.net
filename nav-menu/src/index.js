import './style.css';
import {createElementWithClass as create} from './utilities';

const currentLocation = window.location.pathname.split('/')[1];
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

const clickNavItem = (e) => {
  if (e.target.innerHTML.length < 10) {
    getPageContent(e.target.innerHTML);
    target = document.getElementById(window.location.pathname.split('/')[1]);
  }
};

navContainer.addEventListener('click', (e) => clickNavItem(e));
const navUnderline = create('div', 'nav-underline');
navContainer.append(navUnderline);
navBar.append(navContainer);
root.append(navBar);

let navItems = document.querySelectorAll('nav span');
let target = document.getElementById(currentLocation);

navItems.forEach((menu) =>
  menu.addEventListener('mouseover', (e) => hovering(e))
);

const content = create('div', 'content');
content.id = 'content';
root.append(content);

window.addEventListener('load', () => findTarget());
window.addEventListener('load', () => getPageContent());

const getPageContent = (page) => {
  let contentToReturn;
  switch (page) {
    case 'Alpha':
      historyRouterPush(menu[0].route);
      contentToReturn = page;
      break;
    case 'Bravo':
      historyRouterPush(menu[1].route);
      contentToReturn = page;
      break;
    case 'Charlie':
      historyRouterPush(menu[2].route);
      contentToReturn = page;
      break;
    case 'Delta':
      historyRouterPush(menu[3].route);
      contentToReturn = page;
      break;
    case 'Echo':
      historyRouterPush(menu[4].route);
      contentToReturn = page;
      break;
    default:
      let routeIdx;
      menu.forEach((el, idx) => {
        if (window.location.pathname === el.route) routeIdx = idx
      })
      historyRouterPush(menu[routeIdx].route);
      contentToReturn = menu[routeIdx].title;
      break;
  }
  document.getElementById('content').innerHTML = contentToReturn;
};

const historyRouterPush = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
};

// navItems.forEach((menu) =>
//   menu.addEventListener('click', () => findTarget())
// );
navBar && navBar.addEventListener('mouseleave', () => findTarget());

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
