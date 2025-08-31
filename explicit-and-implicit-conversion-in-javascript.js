/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let str = "5";//setting the variable str to a string value of "5" so it is a explicit conversion
let result = Number(str)- 2;//using Number() to explicitly convert the string "5" to the number 5, allowing for correct arithmetic operation
console.log("The result is: " + result);

let isValid = Boolean(true);//using Boolean() to explicitly convert true to a boolean value, which is still true
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;//using Number() to explicitly convert the string "25" to the number 25, allowing for correct arithmetic operation
console.log("Total Age: " + totalAge);

let totalTaxDue = ".0725" * 500
console.log("Total Tax Due: " + totalTaxDue);//implicit conversion occurs here, as JavaScript automatically converts the string ".0725" to a number for the multiplication operation

let booleanTest = null;
console.log ("Boolean of null is: " + Boolean(booleanTest));//using Boolean() to explicitly convert null to a boolean value, which results in false