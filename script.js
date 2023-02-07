const $= document.querySelector.bind(document);

//const clckBtn= document.getElementById('clickmebutton')
const clckBtn= $('#clickmebutton');

clckBtn.addEventListener('click',foo);
function foo(){
    alert('helloooo')
}
