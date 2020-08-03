import {createMainMenuTemplate} from "./view/main-menu.js";
import {createFiltersTemplate} from "./view/filter.js";
import {createSortInBoardTemplate} from "./view/sort.js";
import {createTaskCardTemlate} from "./view/task.js";
import {createFormTaskTemplate} from "./view/form.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";

const TASK_COUNT = 3;
const DEFAULT_POSITION = `beforeend`;
const mainElementOnSite = document.querySelector(`.main`);
const mainControlElementOnSite = mainElementOnSite.querySelector(`.main__control`);
let tasksList = ``;
const renderElement = (parent, template, position) => {
  parent.insertAdjacentHTML(position, template);
};

renderElement(mainControlElementOnSite, createMainMenuTemplate(), DEFAULT_POSITION);
renderElement(mainElementOnSite, createFiltersTemplate(), DEFAULT_POSITION);
renderElement(mainElementOnSite, createSortInBoardTemplate(), DEFAULT_POSITION);

const boardElement = mainElementOnSite.querySelector(`.board`);
const boardTaskList = boardElement.querySelector(`.board__tasks`);

renderElement(boardTaskList, createFormTaskTemplate(), DEFAULT_POSITION);

for (let i = 0; i < TASK_COUNT; i++) {
  tasksList += createTaskCardTemlate();
}

renderElement(boardTaskList, tasksList, DEFAULT_POSITION);
renderElement(boardElement, createLoadMoreButtonTemplate(), DEFAULT_POSITION);
