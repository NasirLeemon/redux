

const counterElm = document.getElementById('counter')
const incrementElm = document.getElementById('increment')
const decrementElm = document.getElementById('decrement')


let count = 0;


incrementElm.addEventListener('click', ()=>{
    count++
    counterElm.innerText = count
})

decrementElm.addEventListener('click', ()=>{
    count--
    counterElm.innerText = count
})