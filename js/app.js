' use strict'
var userName = prompt('what is your name');
 alert('Hello  ' + userName);
var userLocation = prompt( 'Do you live in jordan?');
var lower = userLocation.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
    alert(' greate , Im in jordan too');
         break;
    case 'no':
    case 'n':
        alert('Unfortunately');
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
    alert(' me too');
         break;
    case 'no':
    case 'n':
        alert(' nice,but I think Im older than you !');
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
    alert(' greate');
         break;
    case 'no':
    case 'n':
        alert('ohh!');
        break;
     default:
        alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you are in university');
 var knowlage = prompt( 'Do you Know information about software developer?');
var lower = knowlage.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
    alert(' greate')
         break;
    case 'no':
    case 'n':
        alert(' you should know is a enthusiastic world');
        break;
     default:
        alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you have ifm about S.D');
 var interested = prompt( 'Do you interested to Know information about me?');
var lower = interested.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
    alert(' me too')
         break;
    case 'no':
    case 'n':
    alert('ohh! but Im intersted to know about you');
        break;
     default:
     alert('please answer its a yes or no question ');
         break;
 }
 // console.log(' you are Intersted about me');
 alert('thanks for Answering our Question  ' + userName );