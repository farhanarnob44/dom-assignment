document.getElementById('donation-sec').addEventListener('click', function(){
    showSection('main-section')
    this.classList.add('bg-button')

    const transactionHisatory =document.getElementById('transaction')
    transactionHisatory.classList.remove('bg-button')
})

