//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
//that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.


let magicians:string[]=["Alex","David","Dora","John","Medows"];
function show_magicians(magicians:string[]){
magicians.forEach(magicians=>
console.log(magicians))

}

function make_great(magicians:string[]){
for (let z=0; z<magicians.length;z++){
magicians[z] = "The Great "  + magicians[z]
}}
make_great(magicians)
show_magicians(magicians)
