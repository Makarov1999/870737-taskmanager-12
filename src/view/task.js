import {isTaskExpired, isTaskRepeating, humanizeDate} from "../util.js";
export const createTaskCardTemlate = (task) => {
  const {color, description, dueDate, repeatingDays, isArchive, isFavorite} = task;
  const date = dueDate !== null ? humanizeDate(dueDate) : ``;
  const deadlineClass = isTaskExpired(dueDate) ? `card--deadline` : ``;
  const repeatingClass = isTaskRepeating(repeatingDays) ? `card--repeat` : ``;
  const archiveClassBtn = isArchive ? `card__btn--archive card__btn--disabled` : `card__btn--archive`;
  const favoriteClassBtn = isFavorite ? `card__btn--favorites card__btn--disabled` : `card__btn--favorites`;
  return (
    `<article class="card card--${color} ${deadlineClass} ${repeatingClass}">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn ${archiveClassBtn}">
            archive
          </button>
          <button
            type="button"
            class="card__btn ${favoriteClassBtn}"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <p class="card__text">${description}</p>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${date}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`
  );
};
