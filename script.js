const body = document.querySelector('body');
button = document.createElement('button');
button.addEventListener('click', requestGridSize);
button.textContent = 'New grid'
button.id = 'size-button';
body.prepend(button);

const grid = document.querySelector('#grid');
n = 16;
squarePercentageSize = `${Math.round(1/16*10000)/100}%`;
for (i=0;i<n*n;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.height =squarePercentageSize;
    grid.appendChild(square)
}

function requestGridSize(){
    button = document.querySelector('#size-button');
    let n = Number(prompt('Please enter how many squares you want on each side of the grid.'));
    while(!Number.isInteger(n) || n<1 || n>100){
        n =  Number(prompt('Invalid input. Enter an integer between 1-100, please.'));
    }
    return n;
}