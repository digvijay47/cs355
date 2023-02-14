const $= document.querySelector.bind(document);

//const clckBtn= document.getElementById('clickmebutton')
const clckBtn= $('#clickmebutton');
const change = $('.super');
const imageONe = $('img');

clckBtn.addEventListener('click',foo);
function foo(){
    alert('helloooo')
    change.style.fontSize = 30;
    change.style.backgroundColor = 'green';
}

function imageChange(){
    imageONe.style.width =600;
}


function imageChangeTwo(){
    imageONe.style.width =300;
}
imageONe.addEventListener('mouseover', imageChange);
imageONe.addEventListener('mouseleave', imageChangeTwo);
