// script.js

const $ = document.querySelector.bind(document);

const clckBtn = $('#clickmebutton');
const elements = document.querySelectorAll('.super, .special, .superspecial');
const imageOne = $('img');

clckBtn.addEventListener('click', foo);
function foo() {
  alert('helloooo');
  elements.forEach(function(element) {
    element.style.fontSize = '50px';
    element.style.backgroundColor = 'red';
  });
}

function imageChange() {
  imageOne.style.width = '600px';
}

function imageChangeTwo() {
  imageOne.style.width = '300px';
}

imageOne.addEventListener('mouseover', imageChange);
imageOne.addEventListener('mouseleave', imageChangeTwo);


const secondButton = $('#secondButton');
secondButton.addEventListener('click', function() {
  const loremTexts = document.querySelectorAll('.super, .special, .superspecial');
  loremTexts.forEach(function(element) {
    element.style.fontSize = '5px';
  });
});