import './style.css';
import './heroCat.jpg';
import {
    createHeader,
    createHeadline,
    createWords
} from './module';

const div = document.getElementById('content');
div.insertBefore(createHeader(), div.firstElementChild);
div.appendChild(createHeadline());
div.appendChild(createWords());

console.log('testing...');
console.log('moar');