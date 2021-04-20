import './factory';
import './dom';
import {compose, element} from './dom';
// Add necessary event listeners
const newSection = () => {
  element.addSection();
  const button = document.getElementById('addSection');
  // How many sections are already saved?
  let col = parseInt(colCounter())+1;
  // eslint-disable-next-line max-len
  button.addEventListener('click', () => {
    compose.newSection(col, 'allSectionsWrapper', 'New Section');
    col++;
  });
};
// eslint-disable-next-line require-jsdoc
function lineCounter(col) {
  const keys = Object.keys(localStorage).filter((item) => item[0]!='s');
  const filterCol = keys.filter( (item) => item[0] === col);
  let lines = 0;
  filterCol.length === 0 ? lines = 0 :
  lines = filterCol.length/4;
  return lines;
}
// eslint-disable-next-line require-jsdoc
function colCounter() {
  const keys = searchKeys().sort().filter((item) => item[0]!='s');
  let col = 0;
  let lastIndex = keys.length - 1;
  if (lastIndex === -1) {
    lastIndex = 0;
  } else {
    col = keys[lastIndex][0];
  }
  return col;
}

// find unique indexes in database
// eslint-disable-next-line require-jsdoc
function searchKeys() {
  const data = [...Object.keys(localStorage).filter((item) => item[0]!='s')];

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
        title: searchResult[3],
        schedule: searchResult[2],
        priority: searchResult[1],
        notes: searchResult[0],
      },
  );
};

// Get section titles from localStorage
const getSectionTitle = () => {
  const data = Object.keys(localStorage).sort();
  data
      .filter((item) => item[0] === 's')
      .map((item) => {
        const lastIndex = item.length - 1;
        const col = item[lastIndex];
        const title = document.getElementById(col);
        title.value = localStorage.getItem(item);
      });
};

// Click a task and open editor
const editTask = () => {
  const tasksArray = Array.from(document.querySelectorAll('.savedWrapper'));
  tasksArray.map( (item) => item.addEventListener( 'click', () => edit(item), {once: true}));

  // eslint-disable-next-line require-jsdoc
  function edit(item) {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(item);
    const index = item.id.slice(0, match.index-1);
    const task = findTask(index);
    // eslint-disable-next-line max-len
    const priority = element.label(`${index}priority`, item.id, `${index}notes`, 'Notes:', 'savedNotes' )
    const label = element.label(`${index}notes`, item.id, `${index}notes`, 'Notes:', 'savedNotes' );
    const notes = element.textArea(`${index}notes`, item.id );
  };
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

// eslint-disable-next-line max-len
export {newSection, lineCounter, counterLines, searchKeys, findTask, colCounter, getSectionTitle, editTask};
