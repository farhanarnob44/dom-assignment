document.getElementById('added-money')
.addEventListener('click', function(event){
    
event.preventDefault();

const inputsMoney = getInputFieldVal('input-add-money')

 if (isNaN(inputsMoney)) {
    alert('invalid input');
} else {
    const mainMoney = getTextFieldVal('main-money')

    if(mainMoney<inputsMoney){
       return alert ('not enough money')
    }
    
    
    const sectionMoney = getTextFieldVal('section-money')
    
    const updatedSectionMoney = inputsMoney+ sectionMoney
    const updatedMainSectionMoney =  mainMoney -inputsMoney
    
    document.getElementById('section-money').innerText=updatedSectionMoney
    document.getElementById('main-money').innerText=updatedMainSectionMoney

    my_modal_5.showModal();

    // transaction history 

    const gmtDate = new Date();
    const div =  document.createElement('div')
div.innerText= gmtDate.toUTCString();

    const p =  document.createElement('p')
    p.innerHTML= `
    <p style="border: 1px solid rgba(17, 17, 17, 0.1);padding: 20px" > ${inputsMoney} Taka Donated successfully for Flood at Noakhali, Bangladesh <br>
    ${div.innerText} +6.00 Bangladesh standard Time
    </p>
    `

    
    document.getElementById('transaction-container').appendChild(p)

}
}
)