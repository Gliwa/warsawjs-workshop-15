document.addEventListener('DOMContentLoaded', function() {

  // Create variable
  var resetButton = document.getElementById('reset-score');
  var playerClasses = {
    'playerA': 'red',
    'playerB': 'blue'
  };
  var scores = {
    'playerA': 0,
    'playerB': 0
  };

  var names = {
    'playerA': 'playerA',
    'playerB': 'playerB'
  }

  var currentPlayer;
  var emptyFields;

  initGame();

  resetButton.addEventListener('click', function() {
    scores['playerA'] = 0;
    scores['playerB'] = 0;

    displayPlayerScore('playerA');
    displayPlayerScore('playerB');
  });

  for (let player in names) {
		let renameButton = document.getElementById(`${player}-rename`);
		renameButton.innerText = `Zmień nazwę ${player}`;
		renameButton.addEventListener('click', function () {
			names[player] = prompt(`Zmień nazwę ${player} to:`);
			renameButton.innerText = `Zmień nazwę ${names[player]}`;
			displayRoundInformation();
			displayPlayerScore('playerA');
			displayPlayerScore('playerB');
		})
	}

  function displayPlayerScore(player) {
    var score = document.getElementById(`${player}-score`);

    score.innerHTML = `${names[player]} score: ${scores[player]}`;
  };

  function updatePlayerScore(player) {
    scores[player]++;
  };

  function displayRoundInformation() {
    var round = document.getElementById('round-info');

    round.className = playerClasses[currentPlayer];
    round.innerHTML = `Ruch dla ${names[currentPlayer]}`;
  };

  function initGame() {

    var fields = document.querySelectorAll('.board > div');
    currentPlayer = 'playerA';
    emptyFields = 9;

    fields.forEach(field => field.removeAttribute('class'));

    fields.forEach(field => field.addEventListener('click', fieldClickHandler));

    displayRoundInformation();
    displayPlayerScore('playerA');
		displayPlayerScore('playerB');
  };

  function fieldClickHandler() {

    // Declare playerClasses object to hold color for each player (playerA - 'red' and playerB - 'blue')
    // Declare currentPlayer variable to hold currentPlayer name
    var playerClass = playerClasses[currentPlayer];

    this.classList.add(playerClass);

    // Decrese empty fields by 1
    emptyFields--;

    // Assign to it name of the color of currentPlayer
    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
    } else {
      currentPlayer = 'playerA';
    };

    // Remove Click from handler function
    displayRoundInformation();
    this.removeEventListener('click', fieldClickHandler);

    checkWinner();

    function checkWinner() {
      fields = document.querySelectorAll('.board > div');

      // Create string for each winning configuration 012, 345, 789
      var row1 = fields[0].className + fields[1].className + fields[2].className;
      var row2 = fields[3].className + fields[4].className + fields[5].className;
      var row3 = fields[6].className + fields[7].className + fields[8].className;

      // Create string for each winning configuration 036, 147, 258
      var col1 = fields[0].className + fields[3].className + fields[6].className;
      var col2 = fields[1].className + fields[4].className + fields[7].className;
      var col3 = fields[2].className + fields[5].className + fields[8].className;

      // Create string for each winning configuration 048, 642
      var diag1 = fields[0].className + fields[4].className + fields[8].className;
      var diag2 = fields[6].className + fields[4].className + fields[2].className;

      // Make checks
      var winningCheck = [
        row1,
        row2,
        row3,
        col1,
        col2,
        col3,
        diag1,
        diag2
      ];

      if (winningCheck.includes('redredred')) {
        setTimeout(() => {
          alert(`${names['playerA']} Wins!`);
          updatePlayerScore('playerA');
          initGame();
        }, 100);
        return;
      } else if (winningCheck.includes('blueblueblue')) {
        setTimeout(() => {
          alert(`${names['playerA']} Wins!`);
          updatePlayerScore('playerB');
          initGame();
        }, 100);
      };
    };

    // Allow for more than one game
    if (emptyFields === 0) {
      setTimeout(() => {
        alert('KONIEC GRY');
        initGame();
      }, 100);
    };
  };
});
