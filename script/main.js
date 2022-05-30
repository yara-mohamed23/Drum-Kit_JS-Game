console.log("hello YaRa");
//key code https://keycode.info/


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);



    if (!audio) return; //stopfunction from running all together

    audio.currentTime = 0; //rewind to the start
    audio.play();


    //key.addClass('playing');
    key.classList.add('playing');

}


const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

//removeTransition
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing')
}


window.addEventListener('keydown', playSound)





































//