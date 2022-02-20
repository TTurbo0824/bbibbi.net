const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drap events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  // console.log('start');
  this.className += ' hold';

  // this.className = 'invisible';
  /*
    위와 같이 설정할 경우 
    드래그 시작 직후 바로 요소가 사라짐.
    setTimeout을 사용해 우선 드래그가 시작 된 후,
    그 뒤에 순차적으로 겹치는 요소가 사라지도록 설정
   */
  requestAnimationFrame(() => (this.className = 'invisible'));
  // setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  // console.log('end');
  this.className = 'fill';
  // fill.className = 'fill'
}

function dragOver(e) {
  // console.log('over');
  e.preventDefault();
}

function dragEnter(e) {
  // console.log('enter');
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  // console.log('leave');
  this.className = 'empty';
}

function dragDrop() {
  // console.log('drop');
  this.className = 'empty';
  this.append(fill);
}
