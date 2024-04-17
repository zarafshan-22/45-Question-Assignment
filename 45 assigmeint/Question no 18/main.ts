/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.*/

let dreamPlaces :string[]=["Las Vegas","Turkey","Bangkok","Paris","Japan"];
    console.log(`Original order: ${dreamPlaces}` )
    //• Print your array in alphabetical order without modifying the actual list.
console.log(`Alphabetical order: ${dreamPlaces.slice().sort()}`)
//• Show that your array is still in its original order by printing it.
console.log(`Original order: ${dreamPlaces}` )

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse order: ${dreamPlaces.slice().sort().reverse()}`)
// Show that your array is still in its original order by printing it again.
console.log(`Original order: ${dreamPlaces}` )
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reverse order: ${dreamPlaces.reverse()}`)
//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log(`Original order: ${dreamPlaces.slice().reverse()}`)
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Reverse alphabetical Order Changed: ${dreamPlaces.sort().reverse()}`)
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`Reverse alphabetical Order Changed: ${dreamPlaces.sort().reverse()}`)
