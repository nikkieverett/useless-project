var body = document.querySelector('#body');
var wholeList = document.querySelector('#list');
var gender = document.querySelector('#gender');
var yourName = document.querySelector('#your-name');
var occupation = document.querySelector('#occupation');
var villain = document.querySelector('#villain');
var color = document.querySelector('#color');
var animal = document.querySelector('#animal');
var city = document.querySelector('#city');
var personName = document.querySelector('#persons-name');
var bodyPart = document.querySelector('#body-part');
var verb1 = document.querySelector('#verb-1');
var noun1 = document.querySelector('#noun-1');
var restaurant = document.querySelector('#restaurant');
var monument = document.querySelector('#historic-monument');
var verb2 = document.querySelector('#verb-2');
var food = document.querySelector('#food');
var story = document.querySelector('#story');
var maleStoryTemplate = document.querySelector('#male-story-template').innerHTML;
var femaleStoryTemplate = document.querySelector('#female-story-template').innerHTML;
var submit = document.querySelector('#submit');

//local storage.. saves your answers in the browser session so page can be reloaded and info will still be saved in form
gender.addEventListener('keyup', function(){
  localStorage.setItem('gender', gender.value);
});
yourName.addEventListener('keyup', function(){
  localStorage.setItem('yourName', yourName.value);
});
occupation.addEventListener('keyup', function(){
  localStorage.setItem('occupation', occupation.value);
});
villain.addEventListener('keyup', function(){
  localStorage.setItem('villain', villain.value);
});
color.addEventListener('keyup', function(){
  localStorage.setItem('color', color.value);
});
animal.addEventListener('keyup', function(){
  localStorage.setItem('animal', animal.value);
});
city.addEventListener('keyup', function(){
  localStorage.setItem('city', city.value);
});
personName.addEventListener('keyup', function(){
  localStorage.setItem('personName', personName.value);
});
bodyPart.addEventListener('keyup', function(){
  localStorage.setItem('bodyPart', bodyPart.value);
});
verb1.addEventListener('keyup', function(){
  localStorage.setItem('verb1', verb1.value);
});
noun1.addEventListener('keyup', function(){
  localStorage.setItem('noun1', noun1.value);
});
restaurant.addEventListener('keyup', function(){
  localStorage.setItem('restaurant', restaurant.value);
});
monument.addEventListener('keyup', function(){
  localStorage.setItem('monument', monument.value);
});
verb2.addEventListener('keyup', function(){
  localStorage.setItem('verb2', verb2.value);
});
food.addEventListener('keyup', function(){
  localStorage.setItem('food', food.value);
});

gender.value = localStorage.getItem('gender');
yourName.value = localStorage.getItem('yourName');
occupation.value = localStorage.getItem('occupation');
villain.value = localStorage.getItem('villain');
color.value = localStorage.getItem('color');
animal.value = localStorage.getItem('animal');
city.value = localStorage.getItem('city');
personName.value = localStorage.getItem('personName');
bodyPart.value = localStorage.getItem('bodyPart');
verb1.value = localStorage.getItem('verb1');
noun1.value = localStorage.getItem('noun1');
restaurant.value = localStorage.getItem('restaurant');
monument.value = localStorage.getItem('monument');
verb2.value = localStorage.getItem('verb2');
food.value = localStorage.getItem('food');


//set innerHTML with local storage
// function setText(x){
//  x.value = localStorage.getItem('x');
//   console.log('hello im using the set text function');
// }
// setText(gender);
// setText(yourName);
// setText(occupation);
// setText(villain);
// setText(color);
// setText(animal);
// setText(city);
// setText(personName);
// setText(bodyPart);
// setText(verb1);
// setText(noun1);
// setText(restaurant);
// setText(monument);
// setText(verb2);
// setText(food);

//changes form input styling depending on which question is selected.. checks for clicks and tabs
wholeList.addEventListener('click', function(evt){
  var previous = document.querySelector('.visible');
  if(previous !== null){
    previous.classList.remove('visible');
  }
  if(evt.target.tagName === "INPUT"){
    evt.target.parentElement.classList.add('visible');
  }
}, true);
wholeList.addEventListener('keyup', function(evt){
  var previous = document.querySelector('.visible');
  if(evt.keyCode === 9){
    previous.classList.remove('visible');
    evt.target.parentElement.classList.add('visible');
  }
});

//checks form for blank answers, returns an alert if there are any
function checkForm(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === '') {
      alert("I think you are missing something...");
      return false;
    }
    else{
      ifTrue();
      return true;
    }
  }
}

function ifTrue(){
  var html = '';
  //hides form and submit button
  wholeList.style.display = 'none';
  submit.style.display = 'none';
  body.classList.add('background');
  //determines wether or not to display male or female version of the story
  if(answersOutside.gender === "male" || answersOutside.gender === "Male"){
    html = Mustache.render(maleStoryTemplate, answersOutside);
    story.innerHTML = html;
  }
  else if (answersOutside.gender === "female" || answersOutside.gender === "Female"){
    html = Mustache.render(femaleStoryTemplate, answersOutside);
    story.innerHTML = html;
  }
}
//randomly generates a super hero name
var name1 = ['Captain', 'Turbo', 'Galactic', 'The', 'Aqua', 'Fire', 'Iron', 'Super', 'Green', 'Phantom', 'Dark', 'Ghost', 'Professor', 'Atomic', 'Rock', 'Omega', 'Rocket', 'Shadow', 'Agent', 'Silver', 'Wild', 'Wild', 'Wolf', 'Ultra', 'Wonder', 'Doctor', 'Star'];
var name2 = ['X', 'Shield', 'Machine', 'Justice', 'Beast', 'Wing', 'Arrow', 'Skull', 'Blade', 'Bolt', 'Cobra', 'Blaze', 'Soldier', 'Strike', 'Falcon', 'Fang', 'King', 'Surfer', 'Bot', 'Gaurd', 'Thing', 'Claw', 'Brain', 'Master', 'Power', 'Storm'];

var random1 = '';
for(var i = 0; i < name1.length; i++){
  var randomNumber1 = Math.floor(Math.random()*name1.length);
  random1 = name1[randomNumber1];
}

var random2 = '';
for(var i = 0; i < name2.length; i++){
  var randomNumber2 = Math.floor(Math.random()*name2.length);
  random2 = name2[randomNumber2];
}
//pulls answers from form to push into story
var answersOutside = {};
submit.addEventListener('click', function(evt) {
  var answers = {
    gender: gender.value,
    yourName: yourName.value,
    occupation: occupation.value,
    villain: villain.value,
    hero1: random1,
    hero2: random2,
    color: color.value,
    animal: animal.value,
    city: city.value,
    personName: personName.value,
    bodyPart: bodyPart.value,
    verb1: verb1.value,
    noun1: noun1.value,
    restaurant: restaurant.value,
    monument: monument.value,
    verb2: verb2.value,
    food: food.value
  };
  answersOutside = answers;
  var isItBlank = [];
  Object.getOwnPropertyNames(answers).forEach(
    function(val) {
      isItBlank.push(answers[val]);
    }
  );
  checkForm(isItBlank);
});
