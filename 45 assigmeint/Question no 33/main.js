var Ordinal_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop
Ordinal_Number.forEach(function (Numbers) {
    if (Numbers === 1) {
        console.log("".concat(Numbers, "st"));
    }
    else if (Numbers === 2) {
        console.log("".concat(Numbers, "nd"));
    }
    else if (Numbers === 3) {
        console.log("".concat(Numbers, "rd"));
    }
    else if (Numbers >= 4 && Numbers <= 9) {
        console.log("".concat(Numbers, "th"));
    }
});
