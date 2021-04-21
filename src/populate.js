/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {searchKeys, findTask} from './controller';
import {compose} from './dom';

// On load, create necessary Todos based on Object.keys in localStorage
// Sections
function setSections() {
  const data = Object.keys(localStorage).sort();
  data.filter((item) => item[0] === 's')
      .map((item) => {
        const lastIndex = item.length - 1;
        const col = item[lastIndex];
        const section = document.getElementById(`${item[lastIndex]}sectionWrapper`);
        if (!section) {
          compose.newSection(`${item[lastIndex]}`, 'allSectionsWrapper', 'Section Title');
        };
        const title = document.getElementById(col);
        title.value = localStorage.getItem(item);
      });
}
// Tasks
function setTasks() {
  if (searchKeys.length >= 0) {
    searchKeys().map((item) => {
      const task = findTask(item);
      compose.savedTask(task.index,
          `${task.index[0]}savedSection`,
          task.title,
          task.schedule,
          task.priority,
          task.notes);
    });
  }
}

export {setTasks, setSections};
