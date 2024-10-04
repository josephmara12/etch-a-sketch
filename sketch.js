let container = document.querySelector('.container')
container.style.display = 'none'
let gridDimensions

let genbutt = document.querySelector('#generate')
let userInput = document.querySelector('#userInput')


function generate_Grid() {
    container.style.border = 'solid 2px black'

    genbutt.addEventListener("click", () => {
    gridDimensions = userInput.value
    container.style.display = 'flex'
        for (let i = 0; i < (gridDimensions*gridDimensions); i++) {
            let cell = document.createElement('div');
            let divDimensions = 600 / gridDimensions;           
            cell.style.width = `${divDimensions}px`;
            cell.style.height = `${divDimensions}px`;
            cell.style.backgroundColor = 'red'  
            container.appendChild(cell);
        }
    });
}

generate_Grid()



