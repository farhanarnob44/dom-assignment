document.getElementById('added-money-3')
.addEventListener('click', function(event){
    event.preventDefault();


const inputsMoney = getInputFieldVal('input-add-money-3')
if (isNaN(inputsMoney)) {
    alert('string is not valid for input');
} else {
const mainMoney = getTextFieldVal('main-money')

const sectionMoney = getTextFieldVal('section3-money')

const updatedSectionMoney = inputsMoney+ sectionMoney
const updatedMainSectionMoney =  mainMoney -inputsMoney

document.getElementById('section3-money').innerText=updatedSectionMoney
document.getElementById('main-money').innerText=updatedMainSectionMoney
}
})