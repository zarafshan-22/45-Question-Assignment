function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("My shirt size is ".concat(size, " and ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love car");
