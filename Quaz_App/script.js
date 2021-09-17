const quezData = [
    {
        question: ' How old are you',
        a: '10',
        b: '17',
        c:'20',
        d:'200',
        correct: 'c'
    },
{
    question: ' what is your fav programming languege',
    a: 'Java',
    b: 'python',
    c: 'c',
    d: 'javascript',
    correct: 'b'

},
{
    question: ' who is the President of nigeria in 2020',
    a: 'GoodLuck',
    b: 'Babangida',
    c: 'Obasanjo',
    d: 'yar adua '
},
{
    question: 'what does the HTML stand for?',
    a: 'hypertext makup languege',
    b: 'cascadian style sheet',
    c: 'json object notation',
    d: 'helicopters terminal nazbeen',
    correct: 'a'

},{
    question: 'What year javascript launch',
    a:'2020',
    b: '1995',
    c: '2018',
    d: 'none of the above',
    correct: 'd'
}

];
const quiz  = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn =document.getElementById('submit');

let currentQuiz = 0;
LoadQuez();
function LoadQuez() {
    DeselectAnwer()
    const currentQuezData = quezData[currentQuiz];
    questionEl.innerHTML= currentQuezData.question;
    a_text.innerHTML= currentQuezData.a;
    b_text.innerHTML= currentQuezData.b;
    c_text.innerHTML= currentQuezData.c;
    d_text.innerHTML= currentQuezData.d;
   
}

let answer = undefined;

function GetAnswer() {

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer= answerEl.id;
        }
    });
    return answer
}




function DeselectAnwer(){
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
   
}


let score =0;
submitBtn.addEventListener('click', () =>{
    

let answer =GetAnswer();
console.log(answer);
if (answer) {
    if(answer === quezData[currentQuiz].correct ){
        score++;
    }

       currentQuiz++; 
    if (currentQuiz < quezData.length){
        LoadQuez()
    } else{
       quiz.innerHTML=`<h2> you answered correctly at ${score}/${quezData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
    }
}


})