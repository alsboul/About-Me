' use strict'
var userName = prompt('what is your name ?');
alert('Hello  ' + userName);
var counter = 0;
alert(userName + '  I want to ask you 7 questions about me by guessing and depending on your answers I will count the points you got ');
function getLocation() {
    var userLocation = prompt('Do I live in Jordan?');
    var lower = userLocation.toLowerCase();
    switch (lower) {
        case 'yes':
        case 'y':
            counter++;
            alert(' correct ! , your point is:  ' + counter);
            break;
        case 'no':
        case 'n':
            alert('Unfortunately , am I . your point is ' + counter);
            break;
        default:
            alert('please answer its a yes or no question ');
            break;
    }
}
getLocation();
// console.log(' you live in jordan');
function getAge() {
    var age = prompt('Am I older than 18 years?');
    var lower = age.toLowerCase();
    switch (lower) {
        case 'yes':
        case 'y':
            counter++;
            alert(' nice try ! ,your points is : ' + counter);
            break;
        case 'no':
        case 'n':
            alert(' NO , Im 23 years old! your points : ' + counter);
            break;
        default:
            alert('please answer its a yes or no question ');
            break;
    }
}
getAge();
// console.log(' you are older than 18');
function getUniversty()
{
 
var university = prompt(' Am I in the university?');
var lower = university.toLowerCase();
switch (lower) {
    case 'yes':
    case 'y':
        counter++;
        alert(' Right answer, you have got an extra point , your point is: ' + counter);
        break;
    case 'no':
    case 'n':
        alert(' wrong answer! your point is: ' + counter);
        break;
    default:
        alert('please answer its a yes or no question ');
        break;
}
}
getUniversty();
// console.log(' you are in university');
var knowlage = prompt('Do you think I have information on software developer?');
var lower = knowlage.toLowerCase();
switch (lower) {
    case 'yes':
    case 'y':
        counter++;
        alert(' good guess! ,your point is: ' + counter);
        break;
    case 'no':
    case 'n':
        alert(' You are not lucky this time, your point is: ' + counter);
        break;
    default:
        alert('please answer its a yes or no question ');
        break;
}
// console.log(' you have ifm about S.D');
var interested = prompt('Do you interested to Know any information about me?');
var lower = interested.toLowerCase();
switch (lower) {
    case 'yes':
    case 'y':
        counter++;
        alert(' me too , your point is: ' + counter);
        break;
    case 'no':
    case 'n':
        alert('ohh! but Im intersted about you , your point is: ' + counter);
        break;
    default:
        alert('please answer its a yes or no question ');
        break;
}
// console.log(' you are Intersted about me');
var favNumber = prompt(' what is my favorite number? " write your guess');
for (var i = 0; i < 4; i++) {
    if (favNumber == 9) {
        // console.log(' but my favorite number');
        counter++;
        alert('correct , your points =' + counter);
        i = 10;
    } else if (favNumber > 9) {
        alert('too high');
        favNumber = prompt(' what is my favorite number? " write your guess');
    } else {
        alert('too low');
        favNumber = prompt(' what is my favorite number? " write your guess')
    }

    if (i == 4) {
        alert(' sorry you have 4 chance ,your points is : ' + counter);
    }
}

var arrAnswer = ['pizza', 'mandi', 'mansaf', 'burger', 'molokhia', 'shawerma', 'pasta'];
// arrAnswer = arrAnswer.toLowerCase();
for (var y = 0; y < 6; y++) {
    var favFood = prompt('write one of my favorite food by your guessing ');

    for (var s = 0; s < 7; s++) {

        if (favFood == arrAnswer[s]) {
            counter++;
            alert('your answer is correct , your points : ' + counter);
            y = 7;
        }
        // else if (favFood !== arrAnswer[s]) 
        // {
        //     favFood = prompt('write one of my favorite food by your guessing ');
        // }

    }
    if (y == 6) {
        alert(' sorry you have 7 chance ,your points is : ' + counter);
    }
}
// should i change the final alert 
alert('thanks for Answering our Question  ' + userName + ' your points: ' + counter);