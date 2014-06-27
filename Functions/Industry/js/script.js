/**
 * Created by laun tucker on 6/26/14  Industry Function.
 */
// Setting a limit on pixels per picture
// Not to use picture over 800 pixels

var userInput = prompt("How many pixels is the picture you want to use?");

while (isNaN(userInput) || userInput===""){
    //reprompt user
    userInput = prompt("PLEASE type a ONLY number!")
}
var maxPixels = 800;

if (userInput <800){
    console.log("You are able to use that picture!")
}else{
    console.log("Please find a smaller picture!")


}