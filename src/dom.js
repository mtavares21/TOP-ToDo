import {formDriver, taskFactory} from './factory';
import {counterLines} from './controller';
import High from './images/higth.png';
import Medium from './images/medium.png';
import Low from './images/low.png';
// All needed wrappers
const wrapper = (() => {
  // New Section Wrapper
  const section = (id, appendTo) => {
    const section = document.createElement('div');
    section.id = id;
    section.classList = 'sectionWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(section);
  };

  const savedSection = (id, appendTo) => {
    const savedSection = document.createElement('div');
    savedSection.id = id;
    const parent = document.getElementById(appendTo);
    parent.appendChild(savedSection);
  };

  // Saved title wrappers
  const saved = (id, appendTo) => {
    const parent = document.getElementById(appendTo);
    const saved = document.createElement('div');
    saved.id = id;
    saved.classList = 'savedWrapper';
    parent.appendChild(saved);
  };

  const button = (id, appendTo) => {
    const button = document.createElement('div');
    button.id = id;
    button.classList = 'buttonsWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(button);
  };

  const description = (id, appendTo) => {
    const description = document.createElement('div');
    description.id = id;
    description.classList = 'descriptionWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(description);
  };

  const savedTitle = (id, appendTo) => {
    const savedTitle = document.createElement('div');
    savedTitle.id = id;
    savedTitle.classList = 'savedTitleWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(savedTitle);
  };

  const savedShedule = (id, appendTo) => {
    const saved = document.createElement('div');
    saved.id = id;
    saved.classList = 'savedScheduleWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(saved);
  };
  // For new task form
  const newTask = (id, appendTo) => {
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.classList = 'newWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(wrapper);
  };

  const newForm = (id, appendTo) => {
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.classList = 'formWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(wrapper);
  };

  return {
    section,
    savedSection,
    saved,
    description,
    savedTitle,
    savedShedule,
    newTask,
    button,
    newForm,
  };
})();

// All needed elements
const element = (() => {
  const sectionTitle = (id, appendTo, text) => {
    const title = document.createElement('input');
    title.id = id;
    title.classList = 'sectionTitle';
    title.type = 'text';
    title.value = text;
    const parent = document.getElementById(appendTo);
    parent.appendChild(title);
  };

  // form
  const newForm = (id, appendTo) => {
    const form = document.createElement('form');
    form.id = id;
    const parent = document.getElementById(appendTo);
    parent.appendChild(form);
  };

  // inputs
  const savedInput = (id, appendTo, text) => {
    const input = document.createElement('input');
    input.id = id;
    input.type = 'text';
    input.classList = 'savedInput';
    input.value = text;
    const parent = document.getElementById(appendTo);
    parent.appendChild(input);
  };

  const priority = (id, appendTo, img) => {
    const input = document.createElement('input');
    if (id != '') {
      input.id = id;
    }
    input.classList = 'btnCheck';
    input.style.backgroundImage = `url(${img})`;
    const parent = document.getElementById(appendTo);
    parent.appendChild(input);
  };

  const input = (id, appendTo, type, classList, name, checked) => {
    const input = document.createElement('input');
    if (id != '') {
      input.id = id;
    }
    input.name = name;
    input.type = type;
    input.classList = classList;
    if (checked) {
      input.setAttribute('checked', 'checked');
    }
    const parent = document.getElementById(appendTo);
    parent.appendChild(input);
  };
  // labels
  const label = (id, appendTo, input, text, classList) => {
    const label = document.createElement('label');
    label.id = id;
    label.setAttribute('for', input);
    label.innerText = text;
    label.classList = classList;
    const parent = document.getElementById(appendTo);
    parent.appendChild(label);
  };

  const newLabelTitle = (id, appendTo, input, text) => {
    const label = document.createElement('label');
    if (id != '') {
      label.id = id;
    }
    label.setAttribute('for', input);
    label.innerText = text;
    label.classList = 'newTitle';
    const parent = document.getElementById(appendTo);
    parent.appendChild(label);
  };

  // textArea

  const textArea = (id, appendTo) => {
    const text = document.createElement('textarea');
    text.id = id;
    text.classList = 'formNotes';
    text.rows = 4;
    text.cols = 20;
    const parent = document.getElementById(appendTo);
    parent.appendChild(text);
  };

  // Add new project
  const projectItem = (id, name) => {
    const li = document.createElement('li');
    li.id = `${id}`;
    li.classList = 'projectItem';
    li.innerText = `${name}`;
    const projects = document.getElementById('projectList');
    projects.appendChild(li);
  };

  // Submit button
  const formSubmit = (appendTo) => {
    const dropButton = document.createElement('button');
    dropButton.classList = 'dropbtn';
    dropButton.innerText = 'Add';
    const form = document.getElementById(appendTo);
    dropButton.addEventListener('click', () => {
      const task = taskFactory(formDriver(form));
      task.save();
    });
    const parent = document.getElementById(appendTo);
    parent.appendChild(dropButton);
  };

  // Add task or section button

  const addTask = (col, appendTo) => {
    const button = document.createElement('input');
    button.id = col + '*';
    button.value = '+';
    button.type = 'button';
    button.classList = 'addTask';
    button.addEventListener('click', () => counterLines(button));
    button.addEventListener('click', () =>
      compose.newTask(`${button.id}form`, `${col}savedSection`),
    );
    const parent = document.getElementById(appendTo);
    parent.appendChild(button);
  };

  const addSection = (col, appendTo) => {
    const button = document.createElement('input');
    button.id = `${parseInt(col)}addSection`;
    button.value = '+';
    button.type = 'button';
    button.classList = 'addSection';
    button.addEventListener('click', () => {
      const section = document.getElementById(`${parseInt(col)}sectionWrapper`);
      section.remove();
      compose.newSection(col, `allSectionsWrapper`, 'New Section');
      addTask(col, `${parseInt(col)}sectionWrapper`);
      compose.newSection(`${parseInt(col) + 1}`, 'allSectionsWrapper', '');
      addSection(`${parseInt(col) + 1}`, `${parseInt(col) + 1}sectionWrapper`);
    });
    const parent = document.getElementById(appendTo);
    parent.appendChild(button);
  };

  return {
    sectionTitle,
    newForm,
    savedInput,
    label,
    projectItem,
    priority,
    textArea,
    newLabelTitle,
    input,
    formSubmit,
    addSection,
    addTask,
  };
})();

// Composed Structures : newSection(), newTask(), savedTask()

const compose = (() => {
  const newSection = (col, appendTo, title) => {
    wrapper.section(`${col}sectionWrapper`, appendTo);
    if (title != '') {
      element.sectionTitle(`${col}sectionTitle`, `${col}sectionWrapper`, title);
      wrapper.savedSection(`${col}savedSection`, `${col}sectionWrapper`);
    }
  };

  const savedTask = (col, appendTo, title, schedule, priority) => {
    let img = Low;
    switch (priority) {
      case 'low':
        img = Low;
        break;
      case 'medium':
        img = Medium;
        break;
      case 'high':
        img = High;
        break;
      default:
        img;
    }
    wrapper.saved(`${col}savedWrapper`, appendTo);
    wrapper.button(`${col}buttonWrapper`, `${col}savedWrapper`);
    element.priority(`${col}priority`, `${col}buttonWrapper`, img);
    wrapper.description(`${col}descriptionWrapper`, `${col}savedWrapper`);
    wrapper.savedTitle(`${col}savedTitle`, `${col}descriptionWrapper`);
    // eslint-disable-next-line max-len
    element.label(
        `${col}savedTitleLabel`,
        `${col}savedTitle`,
        `${col}savedTitleInput`,
        'Title',
    );
    element.savedInput(`${col}savedTitleInput`, `${col}savedTitle`, title);
    wrapper.savedShedule(`${col}savedShedule`, `${col}descriptionWrapper`);
    // eslint-disable-next-line max-len
    element.label(
        `${col}savedScheduleLabel`,
        `${col}savedShedule`,
        `${col}savedScheduleInput`,
        'Schedule',
    );
    // eslint-disable-next-line max-len
    element.savedInput(
        `${col}savedScheduleInput`,
        `${col}savedShedule`,
        schedule,
    );
  };

  const newTask = (col, appendTo) => {
    wrapper.newTask(col, appendTo);
    const subcol = parseInt(col) + 1;
    wrapper.newForm(`${subcol}`, col);
    const formcol = `${col}f`;
    element.newForm(`${formcol}`, subcol);

    element.newLabelTitle('', formcol, '', 'New Task');
    element.input('', formcol, 'text', 'formInput');
    element.label('', formcol, '', 'Schedule');
    element.input('', formcol, 'date', 'formInput');
    element.label('', formcol, '', 'Priority', 'prioritys');
    element.label(`${col} low`, formcol, '', '              Low', 'priority');
    element.input(`${col} low`, formcol, 'radio');
    element.label(`${col} medium`, formcol, '', 'Medium', 'priority');
    element.input(`${col} medium`, formcol, 'radio');
    element.label(`${col} high`, formcol, '', 'High', 'priority');
    element.input(`${col} high`, formcol, 'radio');
    element.label('', formcol, '', 'Notes', 'formLabel');
    element.textArea('', formcol);

    element.formSubmit(formcol);
  };
  return {newSection, savedTask, newTask};
})();

export {wrapper, element, compose};
