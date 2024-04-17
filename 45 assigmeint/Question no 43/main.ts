//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
 //Because the original array will be unchanged, return the new array and store it in a separate array.
  //Call show_magicians() with each array to show that you have one array of the original names and one array
//   with the Great added to each magician’s name.

let magicians:string[]=["Alex","David","Dora","John","Medows"];
function show_magicians(magicians1:string[]){
magicians1.forEach(magicians=>
console.log(magicians))

}

function make_great(magicians1:string[]){
return magicians1.map(magicians => "the Great"+magicians)}
//let magicians1:string[]=["Zara","Sana","Sara"];

let make_great1: string[] = make_great ([...magicians]);
console.log('Orignal')

show_magicians(magicians)

console.log("\nGreat Magicians")
show_magicians( make_great1)