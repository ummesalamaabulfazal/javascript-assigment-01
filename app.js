1.
function Checknumber(number) {
    if (number > 0) {
        console.log("positive");
    }
    else if (number < 0) {
        console.log("negetive");
    }
    else {
        console.log("zero");
    }
}
// example:
// Checknumber(5);
// Checknumber(-5);
// Checknumber(0);
2.
function leapyear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year");
    }
    else {
        console.log("Not a Leap Year");
    }
}
// example;
// leapyear(2021);
// leapyear(2019);
// leapyear(2020);
3.
function evenodd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
// example;
// evenodd(4);
// evenodd(7);
// evenodd(23);
4.
function emptystring(str) {
    if (str === "") {
        console.log("empty");
    }
    else {
        console.log("not empty");
    }
}
// example;
// emptystring("hello world");
// emptystring("wow");
// emptystring("");
5.
function grade(score) {
    if (score >= 80) {
        console.log("A");
    }
    else if (score >= 70) {
        console.log("B");
    }
    else if (score >= 60) {
        console.log("C");
    }
    else if (score >= 50) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}
// EXAMPLE;
// grade(score=34);
// grade(score=65);
// grade(score=78);
6.
function divisible(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("divisible by 3 and 5");
    }
    else {
        console.log("not divisible by 3 and 5");
    }
}
// example;
// divisible(15);
// divisible(16);
// divisible(12);
7.
function vowelorchar(character) {

    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) {
        console.log("Vowel");
    }
    else {
        console.log("Consonant");
    }
}
// example;
// vowelorchar("a");
// vowelorchar("u");
// vowelorchar("b");
// vowelorchar("e");


function palindrome(string) {

    if (string[i] !== string[len - 1 - i]) {
        console.log(" not palindrome");
    }
    else {
        console.log("palindrome");
    }
}
// example;
// palindrome("hello");
// palindrome("sgsg");
// palindrome("level");
function findlargestnumber(num1, num2, num3) {
    var largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3
    }
    console.log("the largest number is: " + largest);
}
var num1 = 20
var num2 = 50
var num3 = 10
// findlargestnumber(num1 , num2 , num3 );
function century(year) {
    // var century = math.ceil(year / 100); 
    if (year >= (century - 1) * 100 + 1 && year <= century * 100) {
        console.log(year + "is in the " + century + " century")

    }
    else {
        console.log(year + " is not a century")
    }
}
// century(2020);
// century(2050);


function number(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    else if (number > 1) {


        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
    else {
        console.log("The number is not a prime number.");
    }
}
// number(6);






































































