
const firstDev = document.getElementById('box-1')
const secondDev = document.getElementById('box-2')
const answerDev = document.getElementById('inputfield')
const btnDev = document.querySelector('.btn')
const markDev = document.querySelector('.marks')


const random_One =Math.floor(Math.random() * 100)
const random_two =Math.floor(Math.random() * 100)
const total = random_One + random_two

firstDev.innerHTML=random_One
secondDev.innerHTML=random_two

btnDev.addEventListener("click", () =>{
    const inputValue = answerDev.value;
    if (inputValue == total) {
        swal({
            title: "Good job!",
            text: "Correct Answer :)",
            icon: "success",
            button: "Reload!",
          }).then(() => {
            window.location.reload()
        
          });
    } 
    else{
        swal({
            title: "Incorrect!",
            text: `Invalid Answer:  The correct Answer is : ${total}`,
            icon: "error",
            button: "try again!",
          }).then(() => {
            window.location.reload()
        
          });
    }
})
