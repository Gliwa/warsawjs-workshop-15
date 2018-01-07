// STEP 3
var playerClasses = {
  'playerA': 'red',
  'playerB': 'blue'
};

var currentPlayer = 'playerA';

// create variable in which you will store number of empty fileds left
var emptyFields;

document.addEventListener('DOMContentLoaded', function() {

  initGame();

  function initGame() {
    emptyFields = 9;
    // STEP 1
    var fields = document.querySelectorAll('.board > div');
    fields.forEach(field => field.addEventListener('click', fieldClickHandler));
  };

  function fieldClickHandler() {
    // declare playerClasses object to hold color for each player (playerA - 'red' and playerB - 'blue')
    // declare currentPlayer variable to hold currentPlayer name
    var playerClass = playerClasses[currentPlayer];

    this.classList.add(playerClass);

    // Decrese empty fields by 1
    emptyFields--;

    // assign to it name of the color of currentPlayer
    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
    } else {
      currentPlayer = 'playerA';
    };

    // Remove Click from handler function
    this.removeEventListener('click', fieldClickHandler);

    // Alert
    if (emptyFields === 0) {
      alert('KONIEC GRY');
    }
  };
});
