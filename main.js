//Variable Integer example

let firstNum = 5;
let lastNum = 7;
console.log(firstNum);

function addNumber() {
    let firstNum = 18;
    console.log(firstNum);
    let result = firstNum + lastNum;
    console.log(result);
}

addNumber();

let myName = "Dikko Hikmat"
console.log(myName);


//boolean Variable Example
let isNotSick = true;
//let isNotSick = false;

function hikmatStatus() {
    if (isNotSick) {
        console.log("Hikmat is not sick.");
    } else {
        console.log("Hikmat is sick.");
    }
}

hikmatStatus();


//Condition statements
let age = 21;
let message = '';
if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}
console.log(message);

//Alternatively using ? comparison
let age2 = 10000;
let message2 = console.log(
    age2 < 3 ? "Hi, baby" :
        age2 < 18 ? "Hello" :
            age2 < 100 ? "Greetimgs" :
                "What an unusual age!"
);

//Null coalescing operator ??
let name = "Hkmah";
console.log(name ?? null);

//Prime numbers check between 1 to 10
let n = 10;

isPrime:
for (let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue isPrime; // not a prime, go next i
    }

    console.log(i); // a prime
}

//power
function power(a, b){
    let num = Math.pow(a, b);
    return num;
}

let ans = power(2, 3);
console.log(ans);

//Alternatively
let result = u = 2 ? v = 3 ? Math.pow(2, 3) : res : null ;

console.log(result);