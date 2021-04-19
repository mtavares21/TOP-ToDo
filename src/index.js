/* eslint-disable max-len */
import './todo.css';
import Logo from './images/logo.png';
import './dom.js';
import './factory';
import {searchKeys, findTask} from './controller';
import {element, compose} from './dom';

const indexes = searchKeys();
console.log(indexes);


const logo = document.getElementById('logo');

logo.src = Logo;

/* compose.newSection(0, 'allSectionsWrapper', 'Section 0');
compose.newSection(1, 'allSectionsWrapper', '');
element.addSection(1, '1sectionWrapper', '');
element.addTask(0, '0sectionWrapper');
compose.savedTask(1, '0savedSection', 'newTask', '24/3', 'high');
 searchKeys().map((index) =>
  compose.savedTask(
      index[0],
      `${index[0]}savedSection`,
      findTask(index).title,
      findTask(index).schedule,
      findTask(index).priority,
  ),
);

*/
