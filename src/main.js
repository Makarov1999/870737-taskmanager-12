import {createMainMenuTemplate} from "./view/main-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortInBoardTemplate} from "./view/sort.js";
import {createTaskCardTemlate} from "./view/task.js";
import {createFormTaskTemplate} from "./view/form.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";
import {generateTask} from "./mock/task.js";
import {generateFilter} from "./mock/filter.js";

const TASK_COUNT = 25;
const TASK_COUNT_IN_STEP = 8;
const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);
const DEFAULT_POSITION = `beforeend`;
const mainElementOnSite = document.querySelector(`.main`);
const mainControlElementOnSite = mainElementOnSite.querySelector(`.main__control`);
let tasksList = ``;
const renderElement = (parent, template, position) => {
  parent.insertAdjacentHTML(position, template);
};

renderElement(mainControlElementOnSite, createMainMenuTemplate(), DEFAULT_POSITION);
renderElement(mainElementOnSite, createFilterTemplate(filters), DEFAULT_POSITION);
renderElement(mainElementOnSite, createSortInBoardTemplate(), DEFAULT_POSITION);

const boardElement = mainElementOnSite.querySelector(`.board`);
const boardTaskList = boardElement.querySelector(`.board__tasks`);

renderElement(boardTaskList, createFormTaskTemplate(), DEFAULT_POSITION);

for (let i = 0; i < Math.min(tasks.length, TASK_COUNT_IN_STEP); i++) {
  tasksList += createTaskCardTemlate(tasks[i]);
}

renderElement(boardTaskList, tasksList, DEFAULT_POSITION);
if (tasks.length > TASK_COUNT_IN_STEP) {
  let renderedTasks = TASK_COUNT_IN_STEP;
  renderElement(boardElement, createLoadMoreButtonTemplate(), DEFAULT_POSITION);
  const loadMoreButton = boardElement.querySelector(`.load-more`);
  loadMoreButton.addEventListener(`click`, (evt) => {
    tasksList = ``;
    evt.preventDefault();
    tasks.slice(renderedTasks, renderedTasks + TASK_COUNT_IN_STEP).forEach((task) => {
      tasksList += createTaskCardTemlate(task);
    });
    renderedTasks += TASK_COUNT_IN_STEP;
    renderElement(boardTaskList, tasksList, DEFAULT_POSITION);
    if (renderedTasks >= tasks.length) {
      loadMoreButton.remove();
    }
  });
}
