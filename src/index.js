import './style.css';
import './heroCat.jpg';
import { createHeader } from './module';

const div = document.getElementById('content');
div.insertBefore(createHeader(), div.firstElementChild);

console.log('testing...');
console.log('moar');