const NmberGen =document.querySelector('.NmberGen')
const Gnt = document.querySelector('.Gnt')




function genPassword() {
    const passwordLength = 12;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        const Gen= Math.floor(Math.random() * chars.length);
        password += chars.substring(Gen, Gen +1);
    }
    NmberGen.innerHTML=password;
    document.getElementById('password').value=password;
}
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }
Gnt.addEventListener('click', genPassword)
Gnt.addEventListener('click', copyPassword)


