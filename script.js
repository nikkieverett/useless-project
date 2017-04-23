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
  wholeList.style.display = 'none';
  submit.style.display = 'none';
  body.classList.add('background');
  if(answersOutside.gender === "male" || answersOutside.gender === "Male"){
    html = Mustache.render(maleStoryTemplate, answersOutside);
    story.innerHTML = html;
  }
  else if (answersOutside.gender === "female" || answersOutside.gender === "Female"){
    html = Mustache.render(femaleStoryTemplate, answersOutside);
    story.innerHTML = html;
  }
}

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
