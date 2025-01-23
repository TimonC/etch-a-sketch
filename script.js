const grid = document.querySelector('#grid');
n = 16;
squarePercentageSize = `${Math.round(1/16*10000)/100}%`;
for (i=0;i<n*n;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.height =squarePercentageSize;
    grid.appendChild(square)
}