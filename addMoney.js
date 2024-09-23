document.getElementById('added-money')
.addEventListener('click', function(event){
    event.preventDefault();


const inputsMoney = getInputFieldVal('input-add-money')

if (isNaN(inputsMoney)) {
    alert('string is not valid for input');
} else {
    const mainMoney = getTextFieldVal('main-money')

    const sectionMoney = getTextFieldVal('section-money')
    
    const updatedSectionMoney = inputsMoney+ sectionMoney
    const updatedMainSectionMoney =  mainMoney -inputsMoney
    
    document.getElementById('section-money').innerText=updatedSectionMoney
    document.getElementById('main-money').innerText=updatedMainSectionMoney
}
}
)