/// My List Word guesses
const arryaLists="Acquiesce Acronym Ambiguity Analogy Anachronism Andragogy Antithesis Antonym Articulate Assonance Benchmarking Brainstorming Circumspect Clandestine Cognition Collaborate Colloquial Connotation Contrived Conundrum Correlation Criterion Cumulative Curriculum Deference Developmental Dialect Diction Didactic Dissertation Divergent"
const arryaList = arryaLists.split(' ')
let guessRandom
/// Get All My element 
const btnDev = document.querySelector('.btn');
const guessInput = document.getElementById("guess-word");
const input_numDev = document.getElementById("input-num");
const guessCounterDev =document.getElementById("guessCounter");



let Counter = 6;
let guessMark = 0
let gst;
let  valueMatch;


function grabData(){
    guessRandom= arryaList[Math.floor(Math.random() * arryaList.length)];
    gst = guessRandom.slice(0, -2)
    guessInput.innerHTML=gst

    console.log(guessRandom);
}



btnDev.addEventListener('click', () =>{
    const inputValue = input_numDev.value;
    valueMatch = gst + inputValue
    while (Counter > 0) {

        if ( guessRandom == valueMatch) {
            guessMark +=1
            console.log('You win', guessMark);
            input_numDev.value=''
        console.log( guessMark);
            grabData()
        } 
        else if ( Counter != guessRandom){
            Counter -=1
            grabData()

            guessCounterDev.innerHTML =`You have ${Counter} guesses Remaining:`
            

            if (Counter == 0) {
                swal({
                    title: "You Lost!",
                    text: `Click The Buttom To Play Again:  You Score :  ${guessMark}`,
                    icon: "error",
                    button: "Try Again",
                  }).then(function(){
                    window.location = "";
                  });
            }
        
        }
            
    break
       
    }
   
    })