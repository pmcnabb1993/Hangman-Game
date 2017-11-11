window.onload = function() {
  
  // getElement by ID and set it to variables
  var displayWord = document.getElementById("displayWord");
  var displayLives = document.getElementById("guesses");
  var displayGuesses = document.getElementById("guessedLetter");
  var displayNewGame = document.getElementById("newGame");
  
  // Array of the characters we are guessing from
  var words = ["MARIO", "LUIGI", "PEACH", "YOSHI","DONKEYKONG", "DIDDYKONG", "KIRBY",
  "SAMUS", "LINK", "ZELDA", "GANONDORF", "METAKNIGHT", "FOX", "FALCO", "PIKACHU", "JIGGLYPUFF",
  "MEWTWO", "CHARIZARD", "LUCARIO", "CAPTAINFALCON", "NESS", "LUCAS", "MARTH", "ROY", "IKE", "PIT",
  "WARIO", "OLIMAR", "ROB", "SONIC", "ROSALINA", "BOWSERJR", "GRENINJA", "ROBIN", "LUCINA", "CORRIN",
  "PALUTENA", "VILLAGER", "LITTLEMAC", "SHULK", "DUCKHUNT", "MEGAMAN", "PACMAN", "RYU", "CLOUD", "BAYONETTA",
  "DARKPIT", "WIIFITTRAINER", "ZEROSUIT", "MRGAMEWATCH"] 

  // Alphabet Array
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function newGame() {
    // reset game
    var lives = 10;
    displayLives.innerHTML = lives;
    
     // Variables for tracking the solved letters
    var dash = 0;
    var letters = 0;

    // Variables for Guesses and display them
    var storedGuess = "";
    var arrayGuess = [];
    displayGuesses.innerHTML = arrayGuess;
    
    // variable to pick random word from array 
    var chosenWord = words[Math.floor(Math.random()*words.length)];
    console.log(chosenWord);

    // this displays the random SSBro character word as blank spaces
    var splitWord = chosenWord.split('');
    console.log(splitWord);
    var arrayOfBlanks = splitWord.map(function(val) {
      if (val != " ") {
         return "_";
        } 
      else {
        dash++;
        return "-";
        }

    });

    // Put the blanks back together and display them on the page
    var stringOfBlanks = arrayOfBlanks.join('');
    displayWord.innerHTML = stringOfBlanks;
  
    // Press key function
    document.onkeyup = function checkKey() {
      var keyPress = event.keyCode
      storedGuess = String.fromCharCode(keyPress).toLowerCase();

      // if statement to see if key pressed is a letter
      if (alphabet.indexOf(storedGuess) !== -1 && arrayGuess.indexOf(storedGuess) === -1)  {
        arrayGuess.push(storedGuess);  
        displayGuesses.innerHTML = arrayGuess;
        console.log(arrayGuess);

      // if statment to see if the guess was correct
      for (var i = 0; i < splitWord.length; i++) {
        if (storedGuess == splitWord[i].toLowerCase()) {
        arrayOfBlanks[i] = storedGuess;
        displayWord.innerHTML = arrayOfBlanks.join('').toUpperCase();
        letters++;
        console.log(letters);

      // Win function
      if (letters + dash === chosenWord.length) {
        displayLives.innerHTML = "YOU WON!";
        displayNewGame.innerHTML = 'Press "RETURN" to Start a New Game';
        displayNewGame.style.visibility = "visible";
        document.onkeyup = false;
        document.onkeyup = function() {
        if (event.key === "Enter") {
        newGame();
        displayNewGame.style.visibility = "hidden";
        }
       } 
      } 
     } 
    } 
        
      // Decrease number if guess is wrong
      if (chosenWord.indexOf(storedGuess) === -1) {
        lives -= 1;
        displayLives.innerHTML = lives;
        if (lives <= 0) {
          displayLives.innerHTML = "YOU LOST!";
          displayNewGame.innerHTML = 'Press "RETURN" to Start a New Game';
          displayNewGame.style.visibility = "visible";
          document.onkeyup = false;
          document.onkeyup = function() {
            //Resets the game
            if (event.key === "Enter") {
            newGame();
            displayNewGame.style.visibility = "hidden";

            }
           } 
          } 
        } 
      } 
    } 
  } 

 newGame();
} 
