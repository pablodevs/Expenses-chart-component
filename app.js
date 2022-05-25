const DATA = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

const maxAmount = DATA.reduce((a, b) => { return Math.max(a, b.amount); }, 0);

let weekEl = document.querySelector('.week');
let totalWeekEl = document.querySelector("#totalAmount");
let totalAmount = 0;

DATA.forEach(({ day, amount }) => {
  let newDay = document.createElement('li');
  let bar = document.createElement('div');

  if (amount === maxAmount) {
    bar.classList.add('max-amount');
  }

  bar.setAttribute("data-tooltip", `$${amount}`);
  bar.style.height = `${(amount / maxAmount) * 100}%`;
  bar.classList.add('bar');

  newDay.innerHTML = day;
  newDay.prepend(bar);
  newDay.classList.add('day');

  weekEl.appendChild(newDay);

  totalAmount += amount;
});

totalWeekEl.innerHTML = `$${totalAmount}`;