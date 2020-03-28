
/*
- phoneNumber :

  - must be a valid Tunisia number (13 digit) ex: 0021620200200.

- username :

  - must be alphanumeric and contain 5-12 characters ex: walid123.

- password :

  - must be alphanumeric contain 5-12 characters,must have uppercase and lowercase ex:WAlid123.

- cardNumber :

  - must be numeric (6-digit) between every two digit (-) ex: 12-35-89.

- email

  - must be a valid email

  document.getElementById("userName").addEventListener('blur',''checkuser name )
*/
// var name = document.getElementById('userName').value;
// var email = document.getElementById('email').value;
// var password = document.getElementById('password').value;
// var phoneNumber = document.getElementById('phoneNumber').value;
// var cardNumber = document.getElementById('cardNumber').value;

// var nameRegex = /^[a-z0-9]{5,12}$/i;
// var emailRegex = /^[a-z\d_.]{2,}@[a-z]{3,}.[a-z]{2,3}$/;
// var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;  //it can accept a number and upper/lowercase
// var phoneRegex = /^00216[0-9]{8}$/;
// var cardRegex = /^\d{2}-\d{2}-\d{2}$/;
document.getElementById("userName").addEventListener('blur',checkUserName )
document.getElementById("email").addEventListener('blur',checkEmail )
document.getElementById("phoneNumber").addEventListener('blur',checkPhone )
document.getElementById("password").addEventListener('blur',checkPassword )
document.getElementById("cardNumber").addEventListener('blur',checkCardNumber )


function checkUserName(){
  var p = document.getElementById("userP")
  var user = document.getElementById('userName');
  var nameRegex = /^[a-z0-9]{5,12}$/i;
 
  if(nameRegex.test(user.value)){
    user.style.border = " solid green"
    p.style.visibility = "hidden" 
  }else{
    user.style.border = "solid red"
    p.style.visibility = "visible" 
  }
}



function checkEmail(){
  var p = document.getElementById("emailP")
  var email = document.getElementById('email');
  var emailRegex = /^[a-z\d_.]{2,}@[a-z]{3,}.[a-z]{2,3}$/;
 
  if(emailRegex.test(email.value)){
    email.style.border = " solid green"
    p.style.visibility = "hidden" 
  }else{
    email.style.border = "solid red"
    p.style.visibility = "visible" 
  }
}

function checkPhone(){
  var p = document.getElementById("numberP")
  var phone = document.getElementById("phoneNumber");
  var phoneRegex = /^00216[0-9]{8}$/;
 
  if(phoneRegex.test(phone.value)){
    phone.style.border = " solid green"
    p.style.visibility = "hidden" 
  }else{
    phone.style.border = "solid red"
    p.style.visibility = "visible" 
  }
}




function checkPassword(){
  var p = document.getElementById("passwordP")
  var password = document.getElementById('password');
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
  if(passwordRegex.test(password.value)){
    password.style.border = " solid green"
    p.style.visibility = "hidden" 
  }else{
    password.style.border = "solid red"
    p.style.visibility = "visible" 
  }
} 

function checkCardNumber(){
  var p = document.getElementById("cardP")
  var cardNumber = document.getElementById('cardNumber');
  var cardNumberRegex = /^\d{2}\-\d{2}\-\d{2}$/;
 
  if(cardNumberRegex.test(cardNumber.value)){
    cardNumber.style.border = "solid green"
    p.style.visibility = "hidden" 
  }else{
    cardNumber.style.border = "solid red"
    p.style.visibility = "visible" 
  }
}
