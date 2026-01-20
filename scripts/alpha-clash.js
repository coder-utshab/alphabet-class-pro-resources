// function play(){
//     // step-1: hide the home screen.to hide the screen add the class hidden to the home screen.
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection.classList)

//     //show the playground
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList)

// }


function handleKeyboardKeyUpEvent(event){
    // const playerPressed = event.key;
    const playerPressed = event.key.toLowerCase();


    //get player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key press
    if(playerPressed == expectedAlphabet){
        console.log('you get a point');
        console.log('you have passed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('durr vaiya va apu ... right key press  koro')
    }
}


function continueGame(){
    //step-1 genarate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    //set radomly genarated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background colour
    // setBackgroundColorById(alphabet);
    addBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

