var age = Number(prompt("What is your age? (You may select Cancel or OK if you are younger than 18.)"));
var is_subscribed = confirm("Are you subscribed? Select OK for yes or Cancel for no.");
var bonus = Number(prompt("Please enter the number of bonus points you would like to assign."));


console.log("Thank you for assigning " + bonus + " bonus points!");

if (age < 18 && is_subscribed == false) {
    console.log("The user is younger than 18 and is not subscribed.");
}

else if (age < 18 && is_subscribed == true) {
    console.log("The user is younger than 18 and is subscribed.");
}

else if (age >= 18 && is_subscribed == false) {
    console.log("The user is at least 18 and is not subscribed.");
}

else {
    console.log("The user is at least 18 and is subscribed.");
}

