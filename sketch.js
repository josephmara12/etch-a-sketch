let container = document.querySelector('.container')
container.style.display = 'none'
click = 0
let genbutt = document.querySelector('#generate')
let userInput = document.querySelector('#userInput')

function generate_Grid() {

    container.style.border = 'solid 2px black'
    
    genbutt.addEventListener("click", () => {
        click += 1
        let gridDimensions = userInput.value

        if (click > 1) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }    


        if (isNaN(gridDimensions)) {
            alert('Please Enter a number')
        }
        else if (gridDimensions > 100) {
            alert('Please Enter a number lower than 100')
        }
        
        else {

        
            container.style.display = 'flex'
            for (let i = 0; i < (gridDimensions * gridDimensions); i++) {
                let cell = document.createElement('div');
                let divDimensions = 600 / gridDimensions;
                cell.style.width = `${divDimensions}px`;
                cell.style.height = `${divDimensions}px`;
                //cell.style.border = 'solid black'
                container.appendChild(cell);
                cell.addEventListener("mouseover", () => {
                    
                cell.style.backgroundColor = 'red'

                })  
            }

        }   
    })
}







generate_Grid()