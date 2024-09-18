document.getElementById('btn-cash').addEventListener('click',function(event){
    event.preventDefault();
    const cutMoneyInput = document.getElementById('cash-out').value ;
    console.log(cutMoneyInput)
    const pinNo= document.getElementById('input-cash-pin'). value;
    console.log(pinNo);

    if(pinNo === "1224"){
        const balance = document.getElementById('balance').innerText
        console.log(balance)

        const newBalance = parseFloat(balance) - parseFloat(cutMoneyInput);
        console.log(newBalance);


        document.getElementById('balance').innerText = newBalance;
        console.log
    }

    else{
        alert('Please try again');
    }
})