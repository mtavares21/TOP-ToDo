/* eslint-disable max-len */
import './todo.css';
import Logo from './images/logo.png';
import './dom.js';
import './factory';
import {searchKeys, findTask, newSection, getSectionTitle, editTask} from './controller';
import { compose} from './dom';

const logo = document.getElementById('logo');
logo.src = Logo;

// On load, create necessary Todos based on Object.keys in localStorage,
const indexArray = [...searchKeys()];
indexArray.sort().map(displaySaved);

// eslint-disable-next-line require-jsdoc
function displaySaved(item) {
  const section = document.getElementById(`${item[0]}sectionWrapper`);
  if (!section) {
    compose.newSection(`${item[0]}`, 'allSectionsWrapper', 'Section Title');
  };

  const task = findTask(item);
  const col = item[0];
  let line = item[2];
  compose.savedTask(
      `${col}*${line}`,
      `${col}savedSection`,
      task.title,
      task.schedule,
      task.priority);
  line++;
};

newSection();
getSectionTitle();
editTask();