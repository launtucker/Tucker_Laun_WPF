/**
 * Created by laun tucker on 6/26/14 Personal Function.
 */
    //Creating a ramdon amount of miles you want to walk in a month

var minMiles = prompt("The min amount of miles you want to walk in a day?");

while (isNaN(minMiles) || minMiles==="") {
    //reprompt user
    minMiles = prompt("PLEASE type a minimum NUMBER of miles!")
}
var maxMiles = prompt("The max amount of miles you want to walk in a day?");

while (isNaN(maxMiles) || maxMiles==="") {
    //reprompt user
    maxMiles = prompt("PLEASE type a maximum NUMBER of miles!")
}
