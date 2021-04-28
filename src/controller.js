/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './factory';
import './dom';
import {compose, element} from './dom';
import {taskFactory} from './factory';
import High from './images/higth.png';
import Medium from './images/medium.png';
import Low from './images/low.png';
// Add necessary event listeners
function newSection() {
  element.addSection();
  const button = document.getElementById('addSection');
  // How many sections are already saved?
  button.addEventListener('click', () => {
    compose.newSection(`${colCounter()-1}`, 'allSectionsWrapper', 'New Section');
  });
}

// Counters based on LocalStorage
function lineCounter(col) {
  const keys = Object.keys(localStorage).filter((item) => item[0] != 's');
  const filterCol = keys.filter((item) => item[0] === col);
  let lines = 0;
  filterCol.length === 0 ? (lines = 0) : (lines = filterCol.length / 4);
  return lines;
}
function colCounter() {
  const columns = Object.keys(localStorage)
      .filter((item) => item[0] === 's')
      .map( (item) => {
        const regex = new RegExp(/(\d+)(?!.*\d)/);
        const col = regex.exec(item)[0];
        item = parseInt(col);
        return item;
      })
      .sort((a, b) => a-b);
  const col = parseInt(columns.length);
  if (col === -1) {
    return 0;
  } else {
    return col;
  }
}

/*  if (colArray.length == 0 ) {
    return 0;
  } else {
    return Math.max(...colArray)+1;
  };
}*/
// Find unique indexes in database
function searchKeys() {
  const data = [...Object.keys(localStorage).filter((item) => item[0] != 's')];

  const indexArray = [];
  data.map((key) => {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(key);
    indexArray.push(key.slice(0, match.index));
  });
  const unique = [...new Set(indexArray)];

  return unique;
}

// Find task in local storage based on index
const findTask = function(index) {
  const search = (key) => {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(key);
    const result = key.slice(0, match.index);
    return index === result;
  };

  const searchResult = Object.keys(localStorage)
      .sort()
      .filter((key) => search(key))
      .map((key) => localStorage.getItem(key));

  return Object.assign(
      {},
      {
        index,
        title: searchResult[3],
        schedule: searchResult[2],
        priority: searchResult[1],
        notes: searchResult[0],
      },
  );
};

// Get section titles from localStorage
const setSectionTitle = () => {
  const data = Object.keys(localStorage).sort();
  data
      .filter((item) => item[0] === 's')
      .map((item) => {
        const regex = new RegExp(/(\d+)(?!.*\d)/);
        const col = regex.exec(item)[0];
        const title = document.getElementById(col);
        title.value = localStorage.getItem(item);
      });
};

// Click a task and open editor
const editTask = () => {
  const tasksArray = Array.from(
      document.querySelectorAll('.descriptionWrapper'),
  );
  tasksArray.map((item) =>
    item.addEventListener('click', () => edit(item), {once: true}),
  );


  function edit(item) {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(item.id);
    const index = item.id.slice(0, match.index);
    const task = taskFactory(Object.values(findTask(index)));
    const currPriority = document.getElementById(`${index}priority`);
    currPriority.remove();
    // Display priority buttons
    const low = element.priority(
        `${index}low`,
        `${index}buttonWrapper`,
        Low);
    const medium = element.priority(
        `${index}medium`,
        `${index}buttonWrapper`,
        Medium,
    );
    const high = element.priority(
        `${index}high`,
        `${index}buttonWrapper`,
        High,
    );
    element.formSubmi;
    element.label(
        `${index}notes`,
        item.id,
        `${index}notes`,
        'Notes:',
        'savedNotes',
    );
    // Add priority event listeners and current choice display ( bigger image )
    low.addEventListener('click', () =>{
      localStorage.setItem(`${index}priority`, 'low');
      low.style.width='18px';
      low.style.height='18px';
      medium.style.width='16px';
      medium.style.height='16px';
      high.style.width='16px';
      high.style.height='16px';
    });
    medium.addEventListener('click', () =>{
      localStorage.setItem(`${index}priority`, 'medium');
      low.style.width='16px';
      low.style.height='16px';
      medium.style.width='18px';
      medium.style.height='18px';
      high.style.width='16px';
      high.style.height='16px';
    });
    high.addEventListener('click', () =>{
      localStorage.setItem(`${index}priority`, 'high');
      low.style.width='16px';
      low.style.height='16px';
      medium.style.width='16px';
      medium.style.height='16px';
      high.style.width='18px';
      high.style.height='18px';
    });
    // Set readOnly to false and set event listeners for title and schedule inputs
    const titleInput = document.getElementById(`${index}savedTitleInput`);
    titleInput.removeAttribute('readOnly');
    titleInput.addEventListener('blur', () => localStorage.setItem(`${index}title`, titleInput.value));
    const scheduleInput = document.getElementById(`${index}savedScheduleInput`);
    scheduleInput.removeAttribute('readOnly');
    scheduleInput.type = 'date';
    scheduleInput.style.fontSize = '13px';
    scheduleInput.style.width = '120px';
    scheduleInput.addEventListener('blur', () => localStorage.setItem(`${index}schedule`, scheduleInput.value));
    // Display notes and add event listner
    const notes = element.textArea(`${index}notes`, item.id);
    notes.value = task.notes;
    notes.addEventListener('blur', () => localStorage.setItem(`${index}notes`, notes.value));
    // Refresh page when user clicks out of the box
    window.addEventListener('click', function(e) {
      if (!document.getElementById(`${index}savedWrapper`).contains(e.target)) {
        location.reload();
      }
    });
    // set up delete task button
    element.deleteButton(index, `${index}savedWrapper`);
  }
};

/* Notes:
Some controller logic, witch should be here, is in dom.js, this is NOT OK!
For now it will stay like this, but at some point i should change DOM functions so that
they return their basic objects to work with instead of just setting them up on the document,
by doing this i would be a lot easiar to maintain a separation of responsabilites.
The dom.js file shoul only create the elements, the eventListners should be added in another module,
the controller module, for example.
*/

export {
  newSection,
  lineCounter,
  searchKeys,
  findTask,
  colCounter,
  setSectionTitle,
  editTask,
};
