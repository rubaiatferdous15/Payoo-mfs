document.getElementById('btn-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money').value ;
    console.log(addMoneyInput)
    const pinNo= document.getElementById('input-pin'). value;
    console.log(pinNo);

    if(pinNo==="1224"){
        const balance = document.getElementById('balance').innerText
        console.log(balance)

        const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        console.log(newBalance);


        document.getElementById('balance').innerText = newBalance;
        console.log
    }

    else{
        alert('Please try again');
    }
})