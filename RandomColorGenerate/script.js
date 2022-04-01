const hex = document.querySelector('.hex')

const btn = document.querySelector('.btn')



function Gen() {
    const colorGen= Math.random().toString(16).substring(2,8)
    document.body.style.backgroundColor='#' + colorGen
    hex.innerHTML='#' + colorGen

}

// setInterval(Gen, 400)
btn.addEventListener('click', Gen)