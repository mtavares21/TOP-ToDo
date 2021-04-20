import './dom';

// Factory Function

// eslint-disable-next-line max-len
// Form Driver, takes info from the form and returns an array with the property values
const formDriver = (form) => {
  const getPriority = () => {
    const formArray = [];
    for (let i = 0; i < form.length; i++) {
      formArray.push(form[i]);
    }
    const checkedPriority = formArray.filter((item) => item.checked);
    if (checkedPriority.length === 0) {
      return 'low';
    }
    const priorityId = checkedPriority[0].id;
    const sliceAt = priorityId.indexOf(' ') + 1;
    const priority = priorityId.slice(sliceAt);
    return priority;
  };

  const getIndex = (form) => {
    const id = form.id;
    const sliceEnd = id.indexOf('f');

    return id.slice(0, sliceEnd);
  };

  return [
    getIndex(form),
    form[0].value,
    form[1].value,
    getPriority(form),
    form[5].value,
  ];
};

const taskProto = {
  save: function() {
    localStorage.setItem(`${this.index}title`, `${this.title}`);
    localStorage.setItem(`${this.index}schedule`, `${this.schedule}`);
    localStorage.setItem(`${this.index}priority`, `${this.priority}`);
    localStorage.setItem(`${this.index}notes`, `${this.notes}`);
  },
  getTask: function() {
    const search = (key) => {
      const regex = new RegExp(/[a-zA-Z]/);
      const match = regex.exec(key);
      const result = key.slice(0, match.index);
      return this.index === result;
    };
    const searchResult = Object.keys(localStorage)
        .filter((key) => search(key))
        .map((key) => localStorage.getItem(key));

    return Object.assign(
        {},
        {
          title: searchResult[0],
          schedule: searchResult[2],
          priority: searchResult[3],
          notes: searchResult[1],
        },
    );
  },
  removeTask: function() {},
};

const taskFactory = (values) => {
  return Object.assign(Object.create(taskProto), {
    index: values[0],
    title: values[1],
    schedule: values[2],
    priority: values[3],
    notes: values[4],
  });
};

export {formDriver, taskFactory};
