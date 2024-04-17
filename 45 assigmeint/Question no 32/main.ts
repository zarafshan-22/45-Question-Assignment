let current_Name:string[]=["ZaRa","sAna","admin","erica","sara"]
let newUser :string[]=["zara","moorone","kendal","bella","sara"]

newUser.forEach((new_User) =>{
    if (
        current_Name.some (
        (currentName) => currentName.toLowerCase()===new_User.toLowerCase()
    )
){
        console.log(`${new_User} will need to enter a new username`);
    }
    else{
        console.log(`${new_User} is available`)
        
    }
});