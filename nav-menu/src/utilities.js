export const createElementWithClass = (name, className) => {
  const $dom = document.createElement(name);
  $dom.className = className;
  return $dom;
};

export const historyRouterPush = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
};
