let nameValid=false;
let genderValid=false;
let addressValid=false;
let phoneValid=false;
let emailValid=false;
let paymentValid=false;
let checkValid=false;
function nameValidate(){
let name=document.getElementById('name').value;
let nameLower=String(name.toLowerCase());
console.log(typeof(name));
let jumlah=nameLower.length;
let nameErr=document.getElementById('nameErr');
nameErr.innerHTML="";
nameErr.style.color='red';
if (!name){
    nameErr.innerHTML="can't be empty";
    return false;
}
for(let i=0;i<jumlah;i++){
    if((nameLower[i]>='a'&& nameLower[i]<='z') || nameLower[i]==' '){
        continue;
    }
    else{
        nameErr.innerHTML="Nama tidak valid";
       return false;
    }
}
return true;
}

function genderVal(){
    let male=document.getElementById('male').checked;
    let female=document.getElementById('female').checked;
    let genderErr=document.getElementById('genderErr');
    genderErr.style.color='red';
    genderErr.innerHTML="";
    if(male==true || female==true){
        return true;
    }
    else{
        genderErr.innerHTML="Must Pick Gender";
        return false;
    }
}
function addressVal(){
    let address=document.getElementById('address').value;
    let jumlah=address.length;
    let addresLower=String(address.toLowerCase());
    let addressErr=document.getElementById('addressErr');
    addressErr.innerHTML="";
    addressErr.style.color="red";
    if(!address){
        addressErr.innerHTML="can't be empty";
        return false;
    }
    for(let a=0;a<jumlah;a++){
        if((addresLower[a]>='a'&&addresLower[a]<='z')||addresLower[a]==' '||(addresLower[a]<='0'&&addresLower[a]>='9')){
            continue;
        }
        else{
            addressErr.innerHTML="address invalid";
            return false;
        }
    }
    return true;

}
function phoneVal(){
    let phone=document.getElementById('phone').value;
    let jumlah=phone.length;
    let phoneErr=document.getElementById('phoneErr');
    phoneErr.innerHTML="";
    phoneErr.style.color="red";
    if(!phone){
        phoneErr.innerHTML="can't be empty";
        return false;
    }
    if(jumlah<10||jumlah>14){
        phoneErr.innerHTML='Phone number invalid';
        return false;
    }
    for(let a=0;a<jumlah;a++){
        if(a==0){
            if(phone[a]=='0'||phone[a]=='+'){
                continue;
            }
            else{
                phoneErr.innerHTML='Phone number invalid';
                return false;
            }
        }
        else if(a==1){
            if(phone[a-1]=='0'&&phone[a]=='8'){
                continue;
            }
            else if(phone[a-1]=='+'&&phone[a]=='6'){
                continue;
            }
            else{
                phoneErr.innerHTML='Phone number invalid';
                return false;
            }
        }
        else if(a==2){
            if((phone[a-2]=='0'&&phone[a-1]=='8')&&phone[a]>='1'&&phone[a]<='9'){
                continue;
            }
            else if(phone[a-1]=='+'&&phone[a]=='6'&&phone[a]=='2'){
                continue;
            }
            else{
                phoneErr.innerHTML='Phone number invalid';
                return false;
            }
        }
        else if(phone[a]>='0'&&phone[a]<='9'){
            continue;
        }
        else{
            phoneErr.innerHTML='Phone number invalid';
            return false;
        }
    }
    return true;
}
function emailVal(){
    let email=document.getElementById('email').value;
    let emailErr=document.getElementById('emailErr');
    let jumlah=email.length;
    emailErr.innerHTML="";
    emailErr.style.color="red";
    if(!email){
        emailErr.innerHTML="Can't be empty";
        return false;
    }
    else if(jumlah<=2){
        emailErr.innerHTML="Email not valid";
        return false;
    }
    else if(email.indexOf('@')==-1){
        emailErr.innerHTML="Email not valid";
        return false;
    }
    else{
        let parts = email.split("@");
        let dot = parts[1].indexOf(".");
        let len = parts[1].length;
        let dotSplits = parts[1].split(".");
        let dotCount = dotSplits.length - 1;
 
 
        
        if (dot == -1 || dot < 2 || dotCount > 2) {
            emailErr.innerHTML="Email not valid";
            return false;
        }
 
        
        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                emailErr.innerHTML="Email not valid";
                return false;
            }
        }
        return true;
 
    }
}
function paymentVal(){
    let payment=document.getElementById('payment');
    let paymentErr=document.getElementById('paymentErr');
    let a=payment.selectedIndex;
    let answer=payment.options[a].text;
    paymentErr.innerHTML="";
    paymentErr.style.color="red";
    if(!answer){
        paymentErr.innerHTML="Must choose payment method";
        return false;
    }
    else{
        console.log(answer);
        return true;
    }

}
function checkboxVal(){
    let checkbox=document.getElementById('agree');
    let checkErr=document.getElementById('checkErr');
    checkErr.innerHTML="";
    checkErr.style.color='red';
    if(checkbox.checked!=true){
        checkErr.innerHTML="Must check";
        return false;
    }
    else if(checkbox.checked==true){
        return true;
    }
}
function validate(){
  nameValid= nameValidate();
   genderValid= genderVal();
   addressValid=addressVal();
   phoneValid=phoneVal();
   emailValid=emailVal();
   paymentValid=paymentVal();
   checkValid=checkboxVal();
   if(nameValid&&genderValid&&addressValid&&phoneValid&&emailValid&&paymentValid&checkValid){
    console.log("form valid");
    document.getElementById('agree').checked=false;
    document.getElementById('email').value="";
    document.getElementById('phone').value="";
    document.getElementById('address').value="";
    document.getElementById('name').value="";
    document.getElementById('male').checked=true;
    window.location.href="index.html";
   }
}
