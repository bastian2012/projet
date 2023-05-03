//recuperation des champs du formulaire
let form2 = document.querySelector('#form2')
form2.style.cssText='display:none'
let lastName = document.getElementById('lastName');
let firstName = document.getElementById('firstName');
let email = document.getElementById('email');
let numberPhone = document.getElementById('numberPhone');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let submit = document.getElementById('submit')
var okLastName1 = false;
var okLastName2 = false;
var okLastName = false;
var temponpassword
var selectOPtion;

var okFirstName = false;
var okFirstName1 = false;
var okFirstName2 = false;
var temp;
var okMail = false;


var okPassword = false
var okConfirmPassword = false

var okNumberPhone = false;

var okNif = false
var okNIN = false
var okRadios = false;
var okInterets=false

// fonction verifiant si le nom ou le prenom comporte des chiffre

test = (str) => {
    let bool = true
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            bool = false
            break
        }
        else
            continue;
    }
    return bool;
}


carectereSpeciaux = (str) => {
    let bool = true
    let tab = '!@#$%^&*()_+=<>?|{}[]`~,./;\'';

    for (let i = 0; i < str.length; i++) {
        if (tab.includes(str[i])) {
            bool = false
            break
        }
        else
            continue;
    }
    return bool;
}


function validationEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//ajout d'un ecouteur blus sur le last name

lastName.addEventListener('blur', (event) => {

    const incorrectLastName = document.getElementById('incorrectLastName')
    let tempon = event.target.value
    if (tempon.length == 0) {
        incorrectLastName.innerText = '*Required field'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    else if (!test(tempon)) {
        incorrectLastName.innerText = '*incorrect last name'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }


    else if (!carectereSpeciaux(tempon)) {
        incorrectLastName.innerText = '*incorrect last name'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }


    else if (tempon.length < 3) {
        incorrectLastName.innerText = '*incorrect last name'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    else {
        lastName.style.cssText = 'border-radius:0px'
        incorrectLastName.style.cssText = 'display:none'
        okLastName1 = true

    }



})
// ajout d'un ecouteur focus sur last name

lastName.addEventListener('input', (event) => {
    const incorrectLastName = document.getElementById('incorrectLastName')
    let tempon = event.target.value
    if (tempon.length == 0) {
        incorrectLastName.innerText = '*Required field'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border: red solid 2px;border-radius:5px'
    }
    else if (!test(tempon)) {
        incorrectLastName.innerText = '*incorrect last name'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:red solid 2px;border-radius:5px'
    }
    else if (!carectereSpeciaux(tempon)) {
        incorrectLastName.innerText = '*incorrect last name'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:red solid 2px;border-radius:5px'
    }



    else {
        lastName.style.cssText = 'border-radius:0px'
        incorrectLastName.style.cssText = 'display:none'
        okLastName2 = true;
    }
})



//ajout d'un ecouteur blus sur le first name

firstName.addEventListener('blur', (event) => {
    const incorrectFirstName = document.getElementById('incorrectFirstName')
    let tempon = event.target.value
    if (tempon.length == 0) {
        incorrectFirstName.innerText = '*Required field'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    else if (!test(tempon)) {
        incorrectFirstName.innerText = '*incorrect last name'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }


    else if (!carectereSpeciaux(tempon)) {
        incorrectFirstName.innerText = '*incorrect last name'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }


    else if (tempon.length < 3) {
        incorrectFirstName.innerText = '*incorrect last name'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    else {
        firstName.style.cssText = 'border-radius:0px'
        incorrectFirstName.style.cssText = 'display:none'
        okFirstName1 = true

    }

    console.log(okFirstName1)
    console.log(okFirstName2)
    if (okFirstName1 && okFirstName2) {
        okFirstName = true
        console.log(okFirstName)
    }
})
// ajout d'un ecouteur focus sur last name

firstName.addEventListener('input', (event) => {
    const incorrectFirstName = document.getElementById('incorrectFirstName')
    let tempon = event.target.value
    if (tempon.length == 0) {
        incorrectFirstName.innerText = '*Required field'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border: #f44336 solid 2px;border-radius:5px'
    }
    else if (!test(tempon)) {
        incorrectFirstName.innerText = '*incorrect last name'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    else if (!carectereSpeciaux(tempon)) {
        incorrectFirstName.innerText = '*incorrect last name'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }



    else {
        firstName.style.cssText = 'border-radius:0px'
        incorrectFirstName.style.cssText = 'display:none'
        okFirstName2 = true;
    }


})










// ajout d'un ecouteur sur le champ mail
email.addEventListener('blur', (event) => {
    const incorrectEmail = document.getElementById('incorrectEmail')
    let tempon = event.target.value
    // si le champ mail est vide

    //si l'email na pa de @
    if (tempon.length == 0) {
        incorrectEmail.innerText = '*Required field'
        incorrectEmail.style.cssText = 'color:#f44336'
        email.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'

    }
    if (!validationEmail(tempon)) {
        incorrectEmail.innerText = '*incorrect Email'
        incorrectEmail.style.cssText = 'color:#f44336'
        email.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }

    //si toutes les conditions sont reunis
    else {
        email.style.cssText = 'border-radius:0px'

        incorrectEmail.style.cssText = 'display:none'
        okMail = true;
    }
})

//ajout d'un ecouteur sur le mot de passe

const incorrectPassword = document.getElementById('incorrectPassword')

password.addEventListener('blur', (event) => {
     temponpassword = event.target.value
    //si le champ est vide et il est blur
    if (temponpassword.length == 0) {
        incorrectPassword.innerText = '*Required field'
        incorrectPassword.style.cssText = 'color:#f44336'
        password.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    else if (temponpassword.length < 6) {
        incorrectPassword.innerText = '*low password'
        incorrectPassword.style.cssText = 'color:#f44336'
        password.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    // si le champ n'est pas vide et il n'est pas blur
    else {
        password.style.cssText = 'border-radius:0px'
        incorrectPassword.style.cssText = 'display:none'
        okPassword = true;
    }
})

const incorrectConfirmPassword = document.getElementById('incorrectConfirmPassword')

confirmPassword.addEventListener('blur', (event) => {
    let temponconfirmPassword = event.target.value
    // si le champ est vide et il est blur
    if (temponconfirmPassword.length == 0) {
        incorrectConfirmPassword.innerText = '*Required field'
        incorrectConfirmPassword.style.cssText = 'color:#f44336'
        confirmPassword.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }

    if (temponconfirmPassword == temponpassword) {


        confirmPassword.style.cssText = 'border-radius:0px'
        incorrectConfirmPassword.style.cssText = 'display:none'
        okIncorrectConfirmPassword = true;
        okConfirmPassword = true

    }

    // si le champ n'est pas vide et il n'est pas blur
    else {
        incorrectConfirmPassword.innerText = '*this field is different from the password'
        incorrectConfirmPassword.style.cssText = 'color:#f44336'
        confirmPassword.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'

    }
})


numberPhone.addEventListener('blur', (event) => {
    let incorrectNumberPhone = document.getElementById('incorrectNumberPhone')
    let tempon = event.target.value


    if (tempon.length == 8) {
        numberPhone.style.cssText = 'border-radius:0px'
        incorrectNumberPhone.style.cssText = 'display:none'
        okNumberPhone = true;


    }
    else {
        incorrectNumberPhone.innerText = '*longe a diferan de 8'
        incorrectNumberPhone.style.cssText = 'color:#f44336'
        numberPhone.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
})


function noNegatif(nombre) {
    let bool = true
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] < 0) {
            bool = false;
            break;
        }
    }
    return bool;
}


if (okLastName2 === true && okLastName1 === true) {
    okLastName = true

}



if (okFirstName1 == true && okFirstName2 == true) {
    okLastName = true

}


 
 

let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    //form.style.cssText='display:none'
    if ((okLastName1 || okLastName2) == false) {
        incorrectLastName.innerText = '*incorrect last name'
        incorrectLastName.style.cssText = 'color:#f44336'
        lastName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }

    if ((okFirstName1 || okFirstName2) == false) {
        incorrectFirstName.innerText = '*incorrect last name'
        incorrectFirstName.style.cssText = 'color:#f44336'
        firstName.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }

    if ((okMail) == false) {
        incorrectEmail.innerText = '*incorrect last name'
        incorrectEmail.style.cssText = 'color:#f44336'
        email.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }


    if ((okNumberPhone) == false) {
        incorrectNumberPhone.innerText = '*incorrect number phone'
        incorrectNumberPhone.style.cssText = 'color:#f44336'
        numberPhone.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }

 

    if ((okPassword) == false) {
        incorrectConfirmPassword.innerText = '*incorrect confirm password'
        incorrectConfirmPassword.style.cssText = 'color:#f44336'
        password.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }
    if (( okConfirmPassword) == false) {
        incorrectConfirmPassword.innerText = '*incorrect confirm password'
        incorrectConfirmPassword.style.cssText = 'color:#f44336'
        password.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
    }


    else {
        form.style.cssText = 'display:none';
        form2.style.cssText = 'display:block'



        const country = document.querySelector('select[name=country]')
        country.onchange = function (event) {
             selectOPtion = event.target.value;
            let nombre = document.querySelector('#test')
            let incorrectNif = document.getElementById('incorrectNif')
            nombre.onblur = (param) => {
                 temp = param.target.value;
                if (temp.length == 10 && selectOPtion == 'NIF') {
                    okNif = true
                    nombre.style.cssText = 'solid 2px;border-radius:0px'
                    incorrectNif.innerText = ``
        
                }
        
        
                else if (temp.length == 12 && selectOPtion == 'NIN') {
                    okNIN = true
                    nombre.style.cssText = 'solid 2px;border-radius:0px'
                    incorrectNif.innerText = ``
        
                }
        
                else {
                    incorrectNif.innerText = `*incorrect ${selectOPtion}`
                    nombre.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
                    incorrectNif.style.cssText = 'color:#f44336'
                }
            }
        }
        
        
        const radios = document.querySelectorAll('input[name=gender]')
        radios.forEach((el) => {
            el.oninput = function (event) {
                 let mas =document.getElementById('mas').checked
                 let fem =document.getElementById('fem').checked
                 incorrectRadios=document.getElementById('incorrectRadios');
                incorrectRadios.innerText = ``
                incorrectRadios.style.cssText = 'color:red'
        
                   okRadios=true;
            }
        })
        
        const checkboxes = document.querySelectorAll('input[name=choices]')
        checkboxes.forEach((el) => {
            el.onchange = function (event) {
                let music = document.getElementById('Music').checked
                let Sport = document.getElementById('Sport').checked
                let Culture = document.getElementById('Culture').checked
                let Science = document.getElementById('Science').checked
                let Technology = document.getElementById('Technology').checked
                if (music == false && Sport == false && Culture == false && Science == false && Technology == false) {
                    let incorrectInterests = document.getElementById('incorrectInterests')
                    incorrectInterests.innerText = `*requierd interests`
                    incorrectInterests.style.cssText = 'color:red'
                }
                else {
                    let incorrectInterests = document.getElementById('incorrectInterests')
                    incorrectInterests.innerText = ``
                    incorrectInterests.style.cssText = 'color:red'
                    okInterets=true
                }
        
            }
        })
        
        form2.addEventListener('submit',(bas)=>{
            bas.preventDefault()
        
            if (okRadios==false) {
                incorrectRadios=document.getElementById('incorrectRadios');
                incorrectRadios.innerText = `*requierd interests`
                incorrectRadios.style.cssText = 'color:red'
                
            }
        
         
            if (okNif==false) {
                let nombre = document.querySelector('#test')
            let incorrectNif = document.getElementById('incorrectNif')
                incorrectNif.innerText = `*incorrect feild`
                nombre.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
                incorrectNif.style.cssText = 'color:#f44336'
            }

            if ( okNIN ==false) {
                let nombre = document.querySelector('#test')
            let incorrectNif = document.getElementById('incorrectNif')
                incorrectNif.innerText = `*incorrect feild`
                nombre.style.cssText = 'border:#f44336 solid 2px;border-radius:5px'
                incorrectNif.style.cssText = 'color:#f44336'
            }
        
            if (okInterets==false) {
                let incorrectInterests = document.getElementById('incorrectInterests')
                    incorrectInterests.innerText = `*requierd interests`
                    incorrectInterests.style.cssText = 'color:red'
            }
        
        
            else
            {
                form2.style.cssText='display:none'
                const formData = new FormData(form);
                const form2Data = new FormData(form2);
                let affichage =document.querySelector('#affichage')
        let nom =(formData.get('lastName'))
        let prenom =(formData.get('firstName'))
        let Mail =(formData.get('email'))
        let numero =(formData.get('numberPhone'))
        let motDEPasse =(formData.get('password'))
        let genre=(form2Data.get('gender'))
        let choix=(form2Data.get('choices'))
        
        let br=document.createElement('br')
        
        affichage.append(`last name : ${nom}\n`)
        affichage.append(br)
        affichage.append(`first name : ${prenom}`)
        affichage.append(br)
        
        affichage.append(`Email : ${Mail}\n`)
        affichage.append(br)
        
        affichage.append(`number Phone : ${numero}\n`)
        
        affichage.append(br)
        
        
        affichage.append(`password : ${motDEPasse}\n`)
        
        
        affichage.append(`Gender : ${genre}\n`)
         affichage.append(`interests : ${choix}\n`) 
         affichage.append(` ${selectOPtion} : ${temp}\n`) 
        
        
        }
        })



    }






})
