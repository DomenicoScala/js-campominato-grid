const myButton = document.getElementById('special-button')

const diffSelect = document.getElementById('difficoltà')



myButton.addEventListener('click', function(){
    console.log('myButton', myButton, typeof myButton)
    const gridContainer = document.querySelector('.result-grid')

    const cellNumber = parseInt(diffSelect.value)

    gridContainer.innerHTML = '';

    for(let i = 1; i <= cellNumber; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell', 'cell-' + cellNumber)
        cell.innerHTML += i
        gridContainer.append(cell)
        
        cell.addEventListener('click', function(){
            cell.classList.toggle('active')
            console.log(this)
        })
    }   
})











