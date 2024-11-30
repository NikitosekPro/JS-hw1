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



    const userName = prompt("Enter Your name." , "Peter");
    console.log(userName);
    if (userName != true) {
        const hello = alert("Hello, " + userName);
    }



const question = confirm("Would You like to subscribe to a newsletter?"); 
console.log(question);
if (question != false) {
    const ok = alert("Thank's for subscribing to a newsletter!");

}

else {
    const ok = alert("Fine, but please subscribe next time.");
}


const danger = confirm("The file You're about to download can be dangerous for Your computer.  Would You like to download it anyway?");
console.log(danger);
if (danger != false) {
    const download = alert("Downloading . . .")
    console.log(download);
    
}

else {
    const fail = alert("You've just safed Your device from downloading dangerous virus. Be careful!");
    console.log(fail);
}

