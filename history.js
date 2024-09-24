document.getElementById('transaction').addEventListener('click', function(){
    showSection('transaction-section')
    
    this.classList.add('bg-button')
    const donate =document.getElementById('donation-sec')
    donate.classList.remove('bg-button')
})
