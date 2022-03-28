import './style.css';
import './heroCat.jpg';
import {
    createHeader,
    createHeadline
} from './module';

const div = document.getElementById('content');
div.insertBefore(createHeader(), div.firstElementChild);
div.appendChild(createHeadline());

console.log('testing...');
console.log('moar');