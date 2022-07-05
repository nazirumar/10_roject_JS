
const btnDev = document.querySelector('.btn')
const scrambleDev = document.getElementById('scramble-id')
const textboxDev= document.getElementById('textbox')



const ListWords = "example financial government hotel hundred improve leave love move national offer only own payment point project research say sell show suffertown water world story skill rest exhaust product perform never mean level however friendly force though enough identify hour yet pray come unlike get take study develop determine agree"
const newList =ListWords.split(" ")

const RandomList =newList[Math.floor(Math.random() * newList.length )] 
const worldReverse = RandomList.split('').reverse().join('')
console.log(worldReverse);
textboxDev.innerHTML= worldReverse


let score = 0



console.log(RandomList);
btnDev.addEventListener('click', () =>{
    const inputValue= scrambleDev.value;
        console.log(inputValue);
    if (inputValue == RandomList) {
        console.log("You Win ");
    score ++
    if (inputValue) {
        setInterval( window.location.reload(), 1000)
    }
       
    }
    else{
       alert(`Incorrect Answer ${inputValue}`);
    }
})
