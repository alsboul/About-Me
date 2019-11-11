' use strict'
var Name = prompt('what is your name')
 alert('Hello  ' + Name);
var Location = prompt( 'Do you live in jordan?');
var lower = Location.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
    alert(' greate , Im in jordan too')
         break;
    case 'no':
    case 'n':
        alert('Unfortunately')
        break;
     default:
         break;
 }
 // console.log(' you live in jordan');
 var Age = prompt( 'Do you bigger than 18 years?');
var lower = Age.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
    alert(' me too')
         break;
    case 'no':
    case 'n':
        alert(' nice,but I think Im bigger than you !');
        break;
     default:
         break;
 }
 // console.log(' you are bigger than 18');
 var UNiv = prompt( 'Do you in the university?');
var lower = UNiv.toLowerCase();
 switch (lower) {
     case 'yes':
     case 'y': 
    alert(' greate')
         break;
    case 'no':
    case 'n':
        alert('ohh!')
        break;
     default:
         break;
 }
 // console.log(' you are in university');
 var Know = prompt( 'Do you Know information about software developer?');
var lower = Know.toLowerCase();
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
         break;
 }
 // console.log(' you have ifm about S.D');
 var Intrsted = prompt( 'Do you intersted to Know information about me?');
var lower = Intrsted.toLowerCase();
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
         break;
 }
 // console.log(' you are Intersted about me');
 alert('thanks for Answering our Question  ' + Name );