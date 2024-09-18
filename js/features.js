document.getElementById('show-cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-need').classList.remove('hidden');
    document.getElementById('add-no-need').classList.add('hidden');
})

document.getElementById('show-add-money').addEventListener('click',function(){
    document.getElementById('cash-out-need').classList.add('hidden');
    document.getElementById('add-no-need').classList.remove('hidden');
})
