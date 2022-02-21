import * as sub2 from './sub2.js';
import { publicName, multiply as multi } from './sub2.js';

console.log(sub2);
console.log(publicName('John'));
console.log(multi(2, 4));

export default (x) => x * x;
