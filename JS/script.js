
function DeleteMe() {
    document.querySelector("#MyResult").value = ""
}

function CalculatorFun(NewValue) {
    document.querySelector("#MyResult").value += NewValue;
}

function AnswerFun() {
    let a = document.querySelector("#MyResult").value;
    let b = eval(a);
    document.querySelector("#MyResult").value = b;
}


