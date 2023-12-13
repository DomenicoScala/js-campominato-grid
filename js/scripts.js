const myButton = document.getElementById('special-button')

myButton.addEventListener('click', function(){
    console.log('myButton', myButton, typeof myButton)
    const gridContainer = document.querySelector('.result-grid')

    for(let i = 1; i <= 100; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerHTML += i
        gridContainer.append(cell)
        
        cell.addEventListener('click', function(){
            cell.classList.toggle('active')
            console.log(this)
        })
    }   
})











