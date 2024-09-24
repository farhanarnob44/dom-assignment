
// funtion to get the input value 

function getInputFieldVal(id){
const val = document.getElementById(id).value
const value = parseFloat(val)
    return value;
}

// funtion to get the value from text

function getTextFieldVal(id){
    const num = document.getElementById(id).innerText
    const number = parseFloat(num)
    return number;
}

// function for showing history or donation part 

function showSection(id){
    document.getElementById('main-section').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
 

    document.getElementById(id).classList.remove('hidden')
}

