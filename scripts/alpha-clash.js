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


function continueGame(){
    //step-1 genarate a random alphabet
    // const alphabet = getRandomAlphabet()
    const alphabet = getARandomAlphabet()


    console.log('your random alphabet', alphabet);

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

