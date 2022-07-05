


const counterDev = document.querySelector('.counter');

counterDev.innerHTML=`<p>0</p>`

let increase =  0

document.getElementById('btn-increase').addEventListener('click', () =>{
    increase ++
counterDev.innerHTML = increase
})
document.getElementById('btn-reset').addEventListener('click', () => {
    increase = 0
    counterDev.innerHTML = increase
    })

document.getElementById('btn-decrease').addEventListener('click', () =>{
    if (increase == 0) {
        increase = 0
    } else{
    increase --
    counterDev.innerHTML = increase
}
    })

