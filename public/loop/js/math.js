function sum() {
    const num = document.getElementById("number").value;
    let sum = 0;
    let answer = "";

    for (let a = 1; a <= num; a++) {
        answer += a + "<br/>";
        sum += a;
    }

    answer += "<strong>The sum is:</strong> " + sum;
    document.getElementById("display").innerHTML = answer;
}

function factorial() {
    let num = document.getElementById("number").value;
    let answer = "";
    let product = 1;
    let current = num;

    while (current > 1) {
        answer += current + "<br/>";
        product *= current;
        current--; 
    }

    answer += "1 <br/>";
    answer += "<strong>The factorial of " + num + " is:</strong> " + product;
    document.getElementById("display").innerHTML = answer; // Replaces content
}

function odd() {
    const num = document.getElementById("number").value;
    let answer = "";

    for (let a = 1; a <= num; a++) {
        if (a % 2 !== 0) {
            answer += a + "<br/>";
        }
    }

    document.getElementById("display").innerHTML = "<strong>Odd Numbers:</strong> <br/> " + answer;
}

function even() {
    const num = document.getElementById("number").value;
    let answer = "";

    for (let a = 1; a <= num; a++) {
        if (a % 2 === 0) {
            answer += a + "<br/>";
        }
    }

    document.getElementById("display").innerHTML = "<strong>Odd Numbers:</strong> <br/> " + answer;
}
