// STEP 3
var playerClasses = {
  'playerA': 'red',
  'playerB': 'blue'
};

var currentPlayer = 'playerA';

document.addEventListener('DOMContentLoaded', function() {

  initGame();

  function initGame() {

    // STEP 1
    var fields = document.querySelectorAll('.board > div');
    fields.forEach(field => field.addEventListener('click', fieldClickHandler));
  };

  function fieldClickHandler() {
    // declare playerClasses object to hold color for each player (playerA - 'red' and playerB - 'blue')
    // declare currentPlayer variable to hold currentPlayer name
    var playerClass = playerClasses[currentPlayer];

    this.classList.add(playerClass);

    // assign to it name of the color of currentPlayer
    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
    } else {
      currentPlayer = 'playerA';
    };

    // Remove Click from handler function
    this.removeEventListener('click', fieldClickHandler);
  };
});
