function getInputFieldVal(id){
const val = document.getElementById(id).value
const value = parseFloat(val)
    return value;
}

function getTextFieldVal(id){
    const num = document.getElementById(id).innerText
    const number = parseFloat(num)
    return number;
}

function showSection(id){
    document.getElementById('main-section').classList.add('hidden')
    


    // showing the section 

    document.getElementById(id).classList.remove('hidden')
}
function buttonColor(id){
       document.getElementById(id).classList.remove('active')
}
