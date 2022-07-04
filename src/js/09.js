import { dateOptions } from '../options/options';

const formEl = document.querySelector('.js-form');

const dateContEl = document.querySelector('.js-date-descr');

const dayEl = dateContEl.querySelector('.js-day');

const dateEl = dateContEl.querySelector('.js-date');

const monthEl = dateContEl.querySelector('.js-month');

const yearEl = dateContEl.querySelector('.js-year');

const getFormateData = value => {
  const date = new Date(value);
  return {
    day: dateOptions.days[date.getDay()],
    date: date.getDate(),
    month: dateOptions.month[date.getMonth()],
    year: date.getFullYear(),
  };
};

const showCoretntDate = formatedDate => {
  dayEl.textContent = formatedDate.day;
  dateEl.textContent = formatedDate.date;
  monthEl.textContent = formatedDate.month;
  yearEl.textContent = formatedDate.year + ' рік';
};

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const { value } = e.target.elements.date;

  const formateDay = getFormateData(value);
  showCoretntDate(formateDay);
});
