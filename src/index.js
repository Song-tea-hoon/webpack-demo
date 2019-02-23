// CommonJS 스펙
// var _ = require('lodash');
// ES6 스펙
import _ from 'lodash'
import './style.css'
import './hello.scss'
// named import
import { area, circumference } from './js/circle'

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('runnging')