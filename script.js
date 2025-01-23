const body = document.querySelector('body');
let button = document.createElement('button');
button.addEventListener('click', refreshGrid);
button.textContent = 'New grid'
button.id = 'size-button';
body.append(button);

let grid = document.createElement('div');
grid.classList.add('grid');
grid.id='grid';
body.append(grid)
fillGrid();
function fillGrid(n=16){
    let grid = document.querySelector('#grid');
    let squarePercentageSize = `${1/n*100}%`;
    for (let i=0;i<n*n;i++){

        let square = document.createElement('div');
        square.classList.add('square');
        square.style.height =squarePercentageSize;
        square.style.width =squarePercentageSize;
        square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},
                                                ${Math.floor(Math.random() * 256)})`;
        
        square.style.setProperty('--square_opacity', 0);
        square.addEventListener("mouseenter", function() {
            incrementGridOpacity(square);});
        grid.appendChild(square)

    }
}

function incrementGridOpacity(square){
    const currOpacity = parseFloat(getComputedStyle(square).getPropertyValue('--square_opacity'));
    const opacity = Math.min(currOpacity + 0.1, 1);
    square.style.setProperty("--square_opacity", opacity);
}

function refreshGrid(){
    button = document.querySelector('#size-button');
    let n = Number(prompt('Please enter how many squares you want on each side of the grid.'));
    while(!Number.isInteger(n) || n<1 || n>100){
        n =  Number(prompt('Invalid input. Enter an integer between 1-100, please.'));
    }

    let grid = document.querySelector('#grid');
    grid.replaceChildren();
    fillGrid(n);
}