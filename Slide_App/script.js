const nextBtn = document.querySelector('.next')
const prevewBtn = document.querySelector('.prev')
const img = document.getElementById('person-img')



const  reviews=[
  {
    img:'./img/img (1).jpg'
   },{
    img:'./img/img (2).jpg'
   },{
    img:'./img/img (3).jpg'
   },{
    img:'./img/img (4).jpg'
   },{
    img:'./img/img (5).jpg'
   },{
    img:'./img/img (6).jpg'
   },{
    img:'./img/img (7).jpg'
   },
   {
    img:'./img/img (8).jpg'
   },
   {
    img:'./img/img (9).jpg'
   },
   {
    img:'./img/img (10).jpg'
   },

];

let currentItem = 0;


window.addEventListener("DOMContentLoaded", function () {
  ShowImage(currentItem);
})

function ShowImage(image) {
  const item = reviews[image]
  img.src = item.img;
  

}


nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length -1){
    currentItem = 0;
  }
    ShowImage(currentItem)

})



prevewBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
    ShowImage(currentItem)

})