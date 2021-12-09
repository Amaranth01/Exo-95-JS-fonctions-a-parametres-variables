let result = document.getElementById('result');
let result3 = document.getElementById('result3');
//1

function phrase( ...valeur) {
    result.innerHTML = "Bonjour";
    for(let value of valeur) {
        result.innerHTML +=value + ", ";
    }
    result.innerHTML = result.innerHTML.slice(0, -1);
}

phrase(" Kiki", " Momo", " Lulu");
phrase(" Kiki", " Momo", " Lulu", " Jojo", " Bibi.");

//2

function number1 (...valeur) {
    let amount = 0;
    for(let value of valeur) {
        amount+= value;
    }
    return parseInt(amount);
}
let result2 = document.createElement('div');

result2.innerHTML += number1(54, 78, 98,4,) +"<br>";
result2.innerHTML += number1(54, 78, 98,4, 42, 7, 5) + "<br>";
result2.innerHTML += number1(54, 78, 98,4, 42, 7, 5, 8)+ "<br>";
document.body.prepend(result2);

//3

function number2 (...valeur) {
    let amount = 0;
    for(let value of valeur) {
        amount+= value;
    }

    return parseInt(amount *11.76);
}

result3.innerHTML = number2(54, 78, 98,4)+ "<br>"
result3.innerHTML += number2(54, 78, 98,4, 42, 7, 5) + "<br>";
result3.innerHTML += number2(54, 78, 98,4, 42, 7, 5, 8)+ "<br>";