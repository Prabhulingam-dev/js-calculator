

let calnum = document.getElementById('inputnumber')

function appendToDisplay(input){
    calnum.value += input;
}

function Calculate(){
    try
    {
        calnum.value = eval(calnum.value)
    }
    catch(error)
    {
        calnum.value = 'error'
    }
}

function Clear(){
    calnum.value='';
}