// Create variable playerClasses
var playerClasses = {
  'playerA': 'red',
  'playerB': 'blue'
};

var currentPlayer = 'playerA';

// Create variable in which you will store number of empty fileds left
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
    // Declare playerClasses object to hold color for each player (playerA - 'red' and playerB - 'blue')
    // Declare currentPlayer variable to hold currentPlayer name
    var playerClass = playerClasses[currentPlayer];

    this.classList.add(playerClass);

    // Decrese empty fields by 1
    emptyFields--;

    // aAsign to it name of the color of currentPlayer
    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
    } else {
      currentPlayer = 'playerA';
    };

    // Remove Click from handler function
    this.removeEventListener('click', fieldClickHandler);

    checkWinner();
    // Alert
    if (emptyFields === 0) {
      alert('KONIEC GRY');
    };

    function checkWinner() {
      fields = document.querySelectorAll('.board > div');

      // Create string for each winning configuration 012, 345, 789
      var row1 = fields[0].className + fields[1].className + fields[2].className;
      var row2 = fields[3].className + fields[4].className + fields[5].className;
      var row3 = fields[6].className + fields[7].className + fields[8].className;

      // Create string for each winning configuration 036, 147, 258
      var column1 = fields[0].className + fields[3].className + fields[6].className;
      var column2 = fields[1].className + fields[4].className + fields[7].className;
      var column3 = fields[2].className + fields[5].className + fields[8].className;

      // Create string for each winning configuration 048, 642
      var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
  		var diagonal2 = fields[6].className + fields[4].className + fields[2].className;


      if (row1 === 'redredred' ||
          row2 === 'redredred' ||
          row3 === 'redredred' ||
          column1 === 'redredred' ||
          column2 === 'redredred' ||
          column3 === 'redredred' ||
          diagonal1 === 'redredred' ||
          diagonal2 === 'redredred'
        ) {
        alert('Red Win');
        return;
      };

      if (row1 === 'blueblueblue' ||
          row2 === 'blueblueblue' ||
          row3 === 'blueblueblue' ||
          column1 === 'blueblueblue' ||
          column2 === 'blueblueblue' ||
          column3 === 'blueblueblue' ||
          diagonal1 === 'blueblueblue' ||
          diagonal2 === 'blueblueblue'
        ) {
        alert('Blue Win');
        return;
      };

    };
  };

});
