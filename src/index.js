/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './todo.css';
import Logo from './images/logo.png';
import './dom.js';
import './factory';
import {searchKeys, findTask, newSection, getSectionTitle, editTask} from './controller';
import {compose} from './dom';

const logo = document.getElementById('logo');
logo.src = Logo;

// On load, create necessary Todos based on Object.keys in localStorage
// Sections

const data = Object.keys(localStorage).sort();
data.filter((item) => item[0] === 's')
    .map((item) => {
      const lastIndex = item.length-1;
      const col = item[lastIndex];
      const section = document.getElementById(`${item[lastIndex]}sectionWrapper`);
      if (!section) {
        compose.newSection(`${item[lastIndex]}`, 'allSectionsWrapper', 'Section Title');
      };
      const title = document.getElementById(col);
      title.value = localStorage.getItem(item);
    });
// Tasks
if ( searchKeys.length>=0) {
  searchKeys().map( (item) =>{
    const task = findTask(item);
    compose.savedTask(task.index,
        `${task.index[0]}savedSection`,
        task.title,
        task.schedule,
        task.priority,
        task.notes);
  });
}
newSection();
editTask();
