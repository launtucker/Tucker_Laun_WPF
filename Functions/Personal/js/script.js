/**
 * Created by laun tucker on 6/26/14 Personal Function.
 */
    //Creating a ramdon amount of miles you want to walk in a month
    //Days they jog
var daysJogging = prompt("The number of days you jog a week?");
   //prompt user for only number
while (isNaN(daysJogging) || daysJogging==="") {
    //reprompt user
    daysJogging = prompt(" PLEASE type a NUMBER of days!")
}

//how many miles a day.
var milesJogDay = prompt("How many miles a day do you jog?");

//prompt user for only numbers.
while (isNaN(milesJogDay) || milesJogDay==="") {
    //reprompt user
    milesJogDay = prompt(" PLEASE type a NUMBER of days!")
}
//total of weekly miles
var weeklyMile = daysJogging * milesJogDay;


//monthly miles actually jogged
var actualMiles = weeklyMile * 4;


//Goals to reach in a month.
var goalForMonth = prompt("How many miles would you like to reach total in a month?");

while (isNaN(goalForMonth) || goalForMonth==="") {
    //re-prompt user
    goalForMonth = prompt("PLEASE type a maximum NUMBER of miles you want to reach in a Month!");
}

var goal;

goal = (actualMiles>goalForMonth) ? "You Have Met Your Goal..Great Job" : "Keep Jogging";
console.log (goal);




