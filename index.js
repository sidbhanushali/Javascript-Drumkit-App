const buttons=document.querySelectorAll('.drum');

function playSound(letter){

    switch (letter) {
        case "w":
            const tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
            const tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
            const tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            const tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

             case "j":
            const snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

            case "k":
              const crash = new Audio("/sounds/crash.mp3");
            crash.play();
             break;
    
             case "l":
                const kick_bass = new Audio("/sounds/kick-bass.mp3");
                kick_bass.play();
                break;

        default:console.log(this.innerHTML);
        
            break;
    }


} 


function buttonAnimation(selectedButton) {
     let activeButton = document.querySelector(`.${selectedButton}`)
    console.log(activeButton);

activeButton.classList.add('pressed');

setTimeout(()=>activeButton.classList.remove('pressed'),100)
}

//
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    } )
} 


//
 document.addEventListener('keydown', function(e){
  playSound(e.key);
  buttonAnimation(e.key);
 }) 