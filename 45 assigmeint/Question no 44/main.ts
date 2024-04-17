//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.

function sandwich(...items:string[]){
    console.log("You order this iteam to add in your sanwiches")
    items.forEach(item=> console.log("-"+item))
    console.log("Enjoy Your Happy Meal!")}
    

sandwich("potato","tomato");
sandwich("mayo","chicken");
sandwich("mayo","tomato");
sandwich("potato","mayo","chicken");