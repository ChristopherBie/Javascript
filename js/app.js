// var age = Number(prompt("What is your age? (You may select Cancel or OK if you are younger than 18.)"));
// var is_subscribed = confirm("Are you subscribed? Select OK for yes or Cancel for no.");
// var bonus = Number(prompt("Please enter the number of bonus points you would like to assign."));

// console.log("Thank you for assigning " + bonus + " bonus points!");


var age = [
    13,
    18,
    20,
    2,
    237,
    35,
    78,
    99,
    110,
    5,
];

var is_subscribed = [
    'true',
    'false',
    'true',
    'true',
    'false',
    'false',
    'true',
    'true',
    'false',
    'true',
];

for(var i = 1; i <= age.length; i++) {

    if(age[i] < 18 && is_subscribed[i] == 'false') {
        console.log("User " + i + " is younger than 18 and is not subscribed.");
    }

    else if(age[i] < 18 && is_subscribed[i] == 'true') {
        console.log("User " + i + " is younger than 18 and is subscribed.");
    }

    else if(age[i] >= 18 && is_subscribed[i] == 'false') {
        console.log("User " + i + " is at least 18 and is not subscribed.");
    }

    else {
        console.log("User " + i + " is at least 18 and is subscribed.");
    }
}