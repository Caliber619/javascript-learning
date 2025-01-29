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


# project random number

```javascript


```