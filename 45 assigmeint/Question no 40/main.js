//Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return
//a Object containing these two pieces of information. Use the function to make three dictionaries
//representing different albums. Print each return value to show that Objects are storing the album 
//   information correctly. Add an optional parameter to make_album() that allows you to store the number 
// of tracks on an album. If the calling line includes a value for the number of tracks, add that value 
//to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle) {
    return ("".concat(artistName, ",").concat(albumTitle));
}
var Album1 = make_album("Justin", "Baby");
var Album2 = make_album("Laddy gaga", "Bad Romance");
var Album3 = make_album("Weekend", "Popular");
console.log(Album1);
console.log(Album2);
console.log(Album3);
function make_album1(artistName, albumTitle, tracks) {
    return ("".concat(artistName, ",").concat(albumTitle, " , ").concat(tracks));
}
var Album4 = make_album1("Justin", "Baby", 100);
var Album5 = make_album1("Laddy gaga", "Bad Romance", 1000);
var Album6 = make_album1("Weekend", "Popular", 200);
console.log(Album4);
console.log(Album5);
console.log(Album6);
