const qouteList =[
    {
    qoute: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    Author : 'Henry Ford'
},
{
  qoute: "In order to write about life first you must live it.", 
  Author : "Ernest Hemingway"
},{

qoute: "The big lesson in life, baby, is never be scared of anyone or anything", 
Author : "Frank Sinatra"
},

{
    qoute :"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth",
    Author: "Attributed to various sources"
},
{
    qoute: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    Author: " Leo Burnett"
},

{
    qoute: "Life is not a problem to be solved, but a reality to be experienced.",
    Author: "Soren Kierkegaard"
},

{
    qoute:"The unexamined life is not worth living.",
    Author: "Socrates"
},

{
    qoute: "Turn your wounds into wisdom",
    Author: "Oprah Winfrey"

},

{
    qoute: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    Author: "Dolly Parton"
}


]






const qouteDev = document.getElementById('qoute')
const qouteAuthorDev =document.getElementById('qouteAuthor') 
const btn =document.querySelector(".btn")




btn.addEventListener('click', ()=>{
    const random = qouteList[Math.floor(Math.random() * qouteList.length )]
    qouteDev.innerHTML = random.qoute
    qouteAuthorDev.innerHTML =random.Author


})


