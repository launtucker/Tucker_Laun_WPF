 /**
 * Created by laun tucker on 6/26/14 Wacky Function.
 */
//creating a random set of numbers for football teams jerseys

 var lowNumber = prompt("Give the lowest number for Jerseys!");

 while (isNaN(lowNumber) || lowNumber===""){
     //reprompt user
    lowNumber = prompt("PLEASE type a LOW number!")
 }

 var highestNumber = prompt("Give the highest number you want to go?");

 while (isNaN(highestNumber) || highestNumberr==="") {
     //reprompt user
     highestNumber = prompt("PLEASE type a HIGHTEST number!")
 }