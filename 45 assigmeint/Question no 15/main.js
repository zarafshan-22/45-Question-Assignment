var guests = ["Kendal Jennar", "Selena Gomaz", "Justin Bieber", "Bella Haddid"];
for (var z = 0; z < guests.length; z++) {
    console.log("My love ".concat(guests[z], ", you are invited to a dinner"));
}
"\n";
var notCome = "Selena Gomaz";
var newGuest = "Michele Morrone";
guests[1] = newGuest;
for (var z = 0; z < guests.length; z++) {
    console.log(" My love ".concat(guests[z], ", you are invited to a dinner"));
}
"\n";
console.log("".concat(notCome, " will not come on tomorrow's dinner"));
