const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');

let people = 2;

const numOfPeople = document.getElementById('number-of-people');
numOfPeople.innerHTML = people;

plusBtn.addEventListener('click', function () {
  if (people < 20) {
    people++;
    numOfPeople.innerHTML = people;
  }
});

minusBtn.addEventListener('click', function () {
  if (people > 2) {
    people--;
    numOfPeople.innerHTML = people;
  }
});
