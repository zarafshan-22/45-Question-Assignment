let userName : string[]=["Eric","Zara","Sana","Admin","Sara"]
for(let user of userName){
if(user === "Admin"){
    console.log("Hello Admin, would you like to see a status report? ")
}
else {
    console.log(` Hello ${user}, thank you for logging in again.`)}
}
