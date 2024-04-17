var current_Name = ["ZaRa", "sAna", "admin", "erica", "sara"];
var newUser = ["zara", "moorone", "kendal", "bella", "sara"];
newUser.forEach(function (new_User) {
    if (current_Name.some(function (currentName) { return currentName.toLowerCase() === new_User.toLowerCase(); })) {
        console.log("".concat(new_User, " will need to enter a new username"));
    }
    else {
        console.log("".concat(new_User, " is available"));
    }
});
