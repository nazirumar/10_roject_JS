

function getData() {
    db.collection("employee").get().then((querySnapshot) => {
        let item=[]
        querySnapshot.forEach((doc) => {
            item.push(
                {
                    id:doc.id,
                    ...doc.data()

                }
            )
          
        });
       generateItem(item)
    });
};


getData()

function generateItem(item){
    let itemhtml='';
    item.forEach((item) =>{
        let  {firstname, lastname, phoneNumber, experiance, city} =item
        itemhtml += `
        <tr >
        <td>${firstname}</td>
        <td>${lastname} </td>
        <td>${phoneNumber}</td>
        <td>${experiance}</td>
        <td>${city}</td>
      </tr>
    
        `
    })
    document.querySelector('.employetable').innerHTML=itemhtml;
}

/// ===============================Add New Data =============================

var firstname=document.getElementById('firstname');
var lastname=document.getElementById('lastname');
var phoneNumber=document.getElementById('phoneNumber');
var experiance=document.getElementById('experiance');
var city=document.getElementById('city');

var btns = document.getElementById('additem')
// Add a new document in collection "cities"
btns.addEventListener('submit', function (e){
    e.preventDefault()
    db.collection("employee").add({
            firstname: btns.firstname.value,
            lastname: btns.lastname.value,
            phoneNumber:btns.phoneNumber.value,
            experiance:btns.experiance.value,
            city: btns.city.value,
     
    })
    btns.reset()
})