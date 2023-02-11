// add click event handeler
document.getElementById('btn-submit').addEventListener('click',function(){
//  step:get the email address
// always remember to use get text from an input field 
const emailField=document.getElementById('user-email');
 const email=emailField.value;
//  console.log(email);

//  step 3 get password
const passwordField=document.getElementById('user-password');
const password=passwordField.value;
// console.log(password);
// Do not verify email password on the cilent 
// step-4:Verify email and password
if (email==='sontan@baap.com' & password==='secret'){
   window.location.href='bank.html';
}
else{
    alert('Rakib give you love name');
}


});
