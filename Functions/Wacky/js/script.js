 /**
 * Created by laun tucker on 6/26/14 Wacky Function.
 */
//creating a random set of numbers for football teams jerseys
// give the starting number for Jerseys
 var lowNumber = prompt("Give the lowest number for Jerseys!");
//prompt user for number only
 while (isNaN(lowNumber) || lowNumber===""){
     //reprompt user
    lowNumber = prompt("PLEASE type a LOW number!")
 }
//Ask user for the highest number for jerseys.
 var highestNumber = prompt("Give the highest number you want to go?");

 //prompt user for number only
 while (isNaN(highestNumber) || highestNumber==="") {
     //reprompt user
     highestNumber = prompt("PLEASE type a HIGHTEST number!")
 }

 var results = jerseyNumber(lowNumber, highestNumber);
console.log(results);

 function jerseyNumber (minNum, maxNum){

     var numberList = Math.round(Math.random( ) * (maxNum-minNum) + Number(minNum));
     return numberList;
 }
