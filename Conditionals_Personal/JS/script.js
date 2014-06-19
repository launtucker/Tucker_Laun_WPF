 /**
 * Created by laun tucker on 6/19/14 Conditional_Personal.
 */
// hours worked out to figure out if you get the weekend off
 var goalHoursDaily = 90;
 var tuesdaysHours = prompt("How long did you workout in minutes Tuesday?");
 var thursdayHours = prompt("How long did you workout in minutes Thursday?");

 // if the person met the goal minutes
 // if the person doesn't meet the goal minutes
 if(tuesdaysHours > 90 && thursdayHours > 90){
     //code that says they have the weekend off to relax
     console.log("Congratulations you can relax this weekend!")

 }else{
     // if user did not meet the goal.
     console.log("Suck it up Buttercup! You are workingout this weekend!")

 }