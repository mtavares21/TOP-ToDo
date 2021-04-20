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
const newSection = () => {
  element.addSection();
  const button = document.getElementById('addSection');
  // How many sections are already saved?
  let col = parseInt(colCounter());
  button.addEventListener('click', () => {
    compose.newSection(col, 'allSectionsWrapper', 'New Section');
    col++;
    if (col == 10) {
      button.remove();
    }
  });
};
function lineCounter(col) {
  const keys = Object.keys(localStorage).filter((item) => item[0] != 's');
  const filterCol = keys.filter((item) => item[0] === col);
  let lines = 0;
  filterCol.length === 0 ? (lines = 0) : (lines = filterCol.length / 4);
  return lines;
}
function colCounter() {
  const colArray = [];
  Object.keys(localStorage)
      .sort()
      .filter( (item) => item[0] === 's')
      .map( (item) => colArray.push(item[parseInt(item.length)-1]) );
  if (colArray.length == 0 ) {
    return 0;
  } else {
    return Math.max(...colArray)+1;
  };
}

// find unique indexes in database
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

// display objects with correct index
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
        const lastIndex = item.length-1;
        const col = item[lastIndex];
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
// Counter to map lines
const counterLines = (element) => {
  const id = element.id;
  const lineIndex = id.indexOf('*') + 1;
  const line = id.slice(lineIndex);
  if (line === '') {
    element.id = id + 0;
  } else {
    element.id = id.replace(`*${line}`, `*${parseInt(line) + 1}`);
  }
};
export {
  newSection,
  lineCounter,
  counterLines,
  searchKeys,
  findTask,
  colCounter,
  setSectionTitle,
  editTask,
};
