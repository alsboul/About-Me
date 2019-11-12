' use strict'
var userName = prompt('what is your name');
 alert('Hello  ' + userName);
var counter =0;
alert( userName +'  I want to ask you 7 questions and depending on your answers I will count the points you got ');
var userLocation = prompt( 'Do you live in jordan?');
var lower = userLocation.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
     counter++; 
    alert(' greate , Im in jordan too , your point is:  ' + counter);
         break;
    case 'no':
    case 'n':
        alert('Unfortunately your point is ' + counter);
        break;
     default:
         alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you live in jordan');
 var age = prompt( 'Do you older than 18 years?');
 var lower = age.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y':
    counter++; 
    alert(' me too ,your points is : ' + counter);
         break;
    case 'no':
    case 'n':
        alert(' sorry your age is a Requirement  ! your points : ' + counter );
        break;
     default:
         alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you are older than 18');
 var university = prompt( ' Are you in the university?');
var lower = university.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
     counter++;
    alert(' great , you have got an extra point , your point is: ' + counter);
         break;
    case 'no':
    case 'n':
        alert('ohh! your point is: ' + counter);
        break;
     default:
        alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you are in university');
 var knowlage = prompt( 'Do you have any information about software developer?');
var lower = knowlage.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
     counter++;
    alert(' greate ,your point is: ' + counter);
         break;
    case 'no':
    case 'n':
        alert(' you should have !, its a good chance, your point is: ' + counter);
        break;
     default:
        alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you have ifm about S.D');
 var interested = prompt( 'Do you interested to Know any information about me?');
 var lower = interested.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
     counter++;
    alert(' me too , your point is: ' + counter);
         break;
    case 'no':
    case 'n':
    alert('ohh! but Im intersted to know about you ,your point is: ' + counter);
        break;
     default:
     alert('please answer its a yes or no question ');
         break;
    }  
 // console.log(' you are Intersted about me');
 var favNumber = prompt('can you guess what is my favorite number? " write your guess');
    for (var i = 0 ; i < 4 ; i++){
    if (favNumber == 9 ){
    // console.log(' but my favorite number');
        counter++;
        alert('correct , your score =' + counter);
        i=10;
    } else if ( favNumber > 9){
        alert('too high');
        favNumber = prompt('can you guess what is my favorite number? " write your guess');
    } else {
        alert('too low');
        favNumber = prompt('can you guess what is my favorite number? " write your guess')
    }
    
    if (i ==4){
    alert(' sorry you have 4 chance ,your points is : ' + counter);
    }
 }
 
 var arrAnswer = ['pizza','mandi','mansaf','burger','molokhia','shawerma','pasta'];
   // arrAnswer = arrAnswer.toLowerCase();
   for (var y = 0 ; y < 7 ; y++) {
    var favFood = prompt('write one of my favorite food by your guessing ');

        for (var s=0 ; s < 7 ; s++){

            if (favFood == arrAnswer[s]){
                counter++;
                alert('your answer is correct , your points : ' + counter);
                y = 11;
            } 
            // else if (favFood !== arrAnswer[s]) 
            // {
            //     favFood = prompt('write one of my favorite food by your guessing ');
            // }
           
        }
        if (y == 7)
        {
        alert(' sorry you have 7 chance ,your points is : ' + counter);
        }
     }
  // should i change the final alert 
 alert('thanks for Answering our Question  ' + userName +' your points: ' + counter);