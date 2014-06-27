/**
 * Created by laun tucker on 6/26/14  Industry Function.
 */
// Setting a limit on pixels per picture
// Not to use picture over 800 pixels
// asking user how many pixels in picture
var userInput = prompt("How many pixels is the picture you want to use?");

//prompting only numbers
while (isNaN(userInput) || userInput===""){
    //reprompt user
    userInput = prompt("PLEASE type a ONLY number!")
}
//Max number of pixels allowed
var maxPixels = 800;

if (userInput <800){
    console.log("You are able to use that picture!")
}else{
    console.log("Please find a smaller picture!")


}