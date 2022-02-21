import {CONTAINER, SLIDE_DATA, CURRENT_INDEX, SLIDE_TO} from './constants.js';
import {createElementWithClass as create} from './utilities.js';

export default class {
  constructor($target, slideData) {
    const frag = document.createDocumentFragment();

    const $slide = create('div', 'slide');

    this[CONTAINER] = create('ul', 'slide_container');

    this[CURRENT_INDEX] = 0;
    this[SLIDE_DATA] = slideData;
    this[CONTAINER].style.width = this[SLIDE_DATA].length * 100 + 'px';
    slideData.forEach((v, i) => {
      const $li = create('li', 'slide_item');

      $li.innerText = v;
      this[CONTAINER].appendChild($li);
    });
    $slide.appendChild(this[CONTAINER]);
    $slide.addEventListener('click', this.triggerClick.bind(this));
    frag.appendChild($slide);
    $target.appendChild(frag);
  }
  [SLIDE_TO](index) {
    this[CURRENT_INDEX] = index;
    this[CONTAINER].style.left = -100 * index + 'px';
  }
  set index(index) {
    index = index % this[SLIDE_DATA].length;
  }
  triggerClick(e) {
    e & e.preventDefault();
    this.index = this[CURRENT_INDEX] + 1;
  }
}
