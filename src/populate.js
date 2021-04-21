/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {searchKeys, findTask, colCounter} from './controller';
import {compose} from './dom';

// On load, create necessary Todos based on Object.keys in localStorage
// Sections
function setSections() {
  for (let i=0; i<colCounter(); i++) {
    compose.newSection(`${i}`, 'allSectionsWrapper', 'New Section');
  }
  const titles = Array.from(document.querySelectorAll('.sectionTitle'));
  titles.map( (item) =>{
    item.value = localStorage.getItem(`section${item.id}`);
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
