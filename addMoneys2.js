document.getElementById('added-money-2')
.addEventListener('click', function(event){
    event.preventDefault();


const inputsMoney = getInputFieldVal('input-add-money-2')



 if (isNaN(inputsMoney)) {
    alert('invalid input');
} else {
    const mainMoney = getTextFieldVal('main-money')

    if(mainMoney<inputsMoney){
       return alert ('not enough money')
    }
    
    
    else{
    const sectionMoney = getTextFieldVal('section2-money')
    
    const updatedSectionMoney = inputsMoney+ sectionMoney
    const updatedMainSectionMoney =  mainMoney -inputsMoney
    
    document.getElementById('section2-money').innerText=updatedSectionMoney
    document.getElementById('main-money').innerText=updatedMainSectionMoney

    my_modal_5.showModal();

    // transaction history 

    const gmtDate = new Date();
    const div =  document.createElement('div')
div.innerText= gmtDate.toUTCString();

    const p =  document.createElement('p')
    p.innerHTML= `
    <p class: style="border: 1px solid rgba(17, 17, 17, 0.1);" > ${inputsMoney} Taka Donated successfully for Flood at Noakhali, Bangladesh <br>
    ${div.innerText} +6.00 Bangladesh standard Time
    </p>
    `

    
    document.getElementById('transaction-container').appendChild(p)
    }

}
}
)