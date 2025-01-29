# Solution Code (js files)



# project COlor changer
```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.background = e.target.id;
    }
  });
});

```


# project BMI 

```javascript

const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// -------------- this use case will give you the empty value

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = (`Please give valid height`)
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = (`Please give valid weight`)
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }




})

```

# Project Clock

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString());

//koi ek method dedo and kitne interval ke baad constantly repeat krna h mujhe
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());  //document me chalana h console me nahi
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```


# project guess the random number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a number greater than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over BOZO, random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Yayy! You are Correct (SomeHow :) )');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = ''; //clean up of the text Field value
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">New Game :)</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```