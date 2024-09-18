document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    
     const phoneNumber = document.getElementById('phone-number').value ;
     console.log(phoneNumber);
     const pinNo = document.getElementById('pin-no').value ;
     console.log(pinNo);

     if(phoneNumber==='5' && pinNo==='1234'){
        console.log("Logged in")
        window.location.href = '/home.html';

     }

     else{
        alert("wrong number or pin");
     }
})