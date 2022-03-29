import './style.css';
import './heroCat.jpg';
import {
  createHeader,
  createHeadline,
  createHero,
  createFeatures
} from './module';

const div = document.getElementById('content');
div.appendChild(createHeader());
div.appendChild(createHeadline());
div.appendChild(createHero());
div.appendChild(createFeatures());

console.log('testing...');
console.log('moar');