import './factory';

// On load, create necessary Todos based on Object.keys in localStorage,

// find unique indexes in database
const searchKeys = () => {
  const data = [...Object.keys(localStorage)];

  const indexArray = [];
  data.map((key) => {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(key);
    indexArray.push(key.slice(0, match.index));
  });
  const unique = [...new Set(indexArray)];

  return unique;
};
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

// let searchArray = searchKeys()
// eslint-disable-next-line max-len
// searchKeys().map( index => compose.savedTask(index[0],`${col}savedSection`, findTask(index).title, findTask(ndex).schedule, findTask(index).priority ))

// Click a task and open editor

// Create necessary Logic for queue

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

export {counterLines, searchKeys, findTask};
