



const GColorDiv = document.getElementById('GColor')
const BtnColorDiv = document.getElementById('BtnColor')
const colorFickerDiv = document.querySelector('.colorFicker')
const copyBtn = document.querySelector('.copy')



const generateColor =() => {
    const ColorRandomG = Math.floor(Math.random()*16777215).toString(16);
    GColorDiv.value = "#" + ColorRandomG
    colorFickerDiv.style.backgroundColor= "#" + ColorRandomG
    document.body.style.backgroundColor = "#" + ColorRandomG
}
BtnColorDiv.addEventListener('click', generateColor)



const copytoclipbord = () =>{
    const textbox = document.getElementById('GColor');
    textbox.select();
    document.execCommand("copy");
}

copyBtn.addEventListener('click', copytoclipbord)
