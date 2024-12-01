const age = 13;
console.log(age);

const name = "Nikita";
console.log(name);

const isStudent = true;
console.log(isStudent);


const myString = "When life gives you lemons, make lemonade"
console.log(myString);


const myNumber = 10;
console.log(myNumber);


const myNull = null;
console.log(myNull);



    const userName = prompt("Enter Your name.");
    console.log(userName);
    if (userName) {
        alert("Hello, " + userName);
    }



const answer = confirm("Would You like to subscribe to a newsletter?"); 
console.log(answer);
if (answer) {
    alert("Thank's for subscribing to a newsletter!");

}

else {
    alert("Fine, but please subscribe next time.");
}


const dangerMessage = "The file You're about to download can be dangerous for Your computer.  Would You like to download it anyway?"
const answerMessage = confirm(dangerMessage);
console.log(answerMessage);
if (answerMessage) {
    alert("Downloading . . .");
} else {
    alert("You've just safed Your device from downloading dangerous virus. Be careful!");
}

