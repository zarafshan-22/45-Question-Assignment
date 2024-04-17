//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and one array
//   with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Alex", "David", "Dora", "John", "Medows"];
function show_magicians(magicians1) {
    magicians1.forEach(function (magicians) {
        return console.log(magicians);
    });
}
function make_great(magicians1) {
    return magicians1.map(function (magicians) { return "the Great" + magicians; });
}
//let magicians1:string[]=["Zara","Sana","Sara"];
var make_great1 = make_great(__spreadArray([], magicians, true));
console.log('Orignal');
show_magicians(magicians);
console.log("\nGreat Magicians");
show_magicians(make_great1);
