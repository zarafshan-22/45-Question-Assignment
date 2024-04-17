var guests = ["Kendal Jennar", "Selena Gomaz", "Justin Bieber", "Bella Haddid"];
/*for(let z=0; z<guests.length; z++){
    console.log(`My love ${guests[z]}, you are invited to a dinner \n`)
}*/
var notCome = "Selena Gomaz";
var newGuest = "Michele Morrone";
guests[1] = newGuest;
/*for(let z=0; z<guests.length; z++){
    console.log(` My love ${guests[z]}, you are invited to a dinner`)}

    console.log( `${notCome} will not come on tomorrow's dinner \n`)
*/
guests.unshift("Cameron Herrin", "lee", "laim Aiken");
/*for(let z=0; z<guests.length; z++){
    console.log(` My love ${guests[z]}, you are invited to a dinner`)}
*/
console.log("\nUnfortunately I can not arrange big table, Only two people are allow");
while (guests.length > 2) {
    var removeGuests = guests.pop();
    console.log("Sorry Madam/Sir ".concat(removeGuests, " you are not invited on tomorrow's dinner"));
}
guests.forEach(function (presentguests) {
    console.log("Respected Sir ".concat(presentguests, " you are invited on tomorrow's dinner"));
});
guests.splice(0, 2);
console.log(guests);
