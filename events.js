
// option 2  important:(we will this )
function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 3
const makeRedButton = document.getElementById('make-red');
makeRedButton.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3 another  (we will this )
const makeBlackButton = document.getElementById('make-black');
makeBlackButton.onclick = function makeBlack(){
    document.body.style.backgroundColor = 'black'
}

// option 4
const blueButton = document.getElementById('make-blue');
blueButton.addEventListener ('click', makeBlue )
function makeBlue(){
    document.body.style.backgroundColor = 'blue'; 
}

// option 4 another
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener ('click', function(){
    document.body.style.backgroundColor = 'pink'
})

// option 5 important:(we will use this sometimes)
document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})


