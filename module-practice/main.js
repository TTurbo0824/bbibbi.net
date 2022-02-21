import sub1 from './sub1.js';
import sub2 from './sub2.js';
import Slide from './Slide.js'
console.log(sub1(2));
console.log(sub2(4, 5));


document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div>'
const slide1 = new Slide(document.getElementById('a'), [1, 2, 3, 4, 5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E', 'F', 'G'])

// 위의 세 변수는 main.js 모듈 안에서만 유효한 변수임으로
// 전역에서도 접근할 수 있게 만들어주는 처리가 필요하다
window.slide1 = slide1;
window.slide2 = slide2;
window.slide3 = slide3;