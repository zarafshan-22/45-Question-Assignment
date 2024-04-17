var car = 'Rolls royce';
var age = 22;
var num = [1, 2, 3, 4];
// Equality Comparison (true)
console.log("Is car == 'Rolls royce'? I predict True.");
console.log(car == 'Rolls royce');
// Strict Equality Comparison (true)
console.log("Is car === 'Rolls royce'? I predict True.");
console.log(car === 'Rolls royce');
// Unequality Comparison (false)
console.log("Is car != 'Rolls royce'? I predict false.");
console.log(car != 'Rolls royce');
// Strict Unequality Comparison (false)
console.log("Is car !== 'Rolls royce'? I predict false.");
console.log(car !== 'Rolls royce');
// Test 6: Lowercase conversion (False)
console.log("Is car.toLowerCase() == 'Rolls royce'? I predict True.");
console.log(car.toLowerCase() != 'Rolls royce'); // True (converted to lowercase)
// Test 6: Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car.toLowerCase()); // False (original value remains uppercase)
// Equality Comparison (true)
console.log("Is age == 22 ? I predict True.");
console.log(age == 22);
// Unequality Comparison (false)
console.log("Is age != 22 ? I predict false.");
console.log(age != 22);
// Less Than Comparison (false)
console.log("Is age < 21? I predict false.");
console.log(age < 21);
// Greater Than Comparison (true)
console.log("Is age > 3? I predict true.");
console.log(age > 3);
// Less Than or Equal to Comparison (true)
console.log("Is age <= 29? I predict true.");
console.log(age <= 29);
// Greater Than or Equal to Comparison (false)
console.log("Is age >= 77? I predict false.");
console.log(age >= 77);
//Operator
//AND (true)
console.log("Is age <= 29 && age > 3 ? I predict true.");
console.log(age <= 29 && age > 3);
//OR
console.log("Is age >= 77||age != 22? I predict false.");
console.log(age >= 77 || age != 22);
// *Array Tests*
// Test 13: In array (True)
console.log("Is 3 in num? I predict True.");
console.log(3 in num); // True 
// Test 14: Not in array (False)
console.log("Is 5 in num? I predict false.");
console.log(5 in num);
