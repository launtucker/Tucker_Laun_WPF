/**
 * Created by laun tucker on 6/19/14 Conditionals_Industry.
 */
// validate if user is old enough to buy e-juice

var userInput = prompt("Please type name?");
var age = prompt("Please type your age?");

// if the person is under the age of 18 they cant buy ejuice from the site.
// if the are of age then they can purchase e-juice from the web site.

if(age > 18){
    //code that says they can buy products
    console.log("Congratulations you can buy from this site")

}else{
    // if user is under age code prompts
    console.log("Nice try kiddo..Come back when you are 18!")

}