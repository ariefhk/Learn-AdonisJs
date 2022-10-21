// Contoh Array
var hobbies = ["coding", "cycling", "climbing", "skateboarding"];

console.log(hobbies);
console.log(hobbies.length);

console.log(hobbies[0]);
console.log(hobbies[1]);

// Mengakses elemen terakhir dari Array
console.log(hobbies[hobbies.length - 1]);

// Methods Array
// .push()
var numbers = [0, 1, 2, 3];
numbers.push(4, 5);

// .pop();
numbers.pop();
console.log(numbers);

// .unshift() --> add number on first
numbers.unshift(-1, -2);
console.log(numbers);

// .shift() --> delete number on first
numbers.shift();
console.log(numbers);

// .sort() --> bisa buat String
var animals = ["kera", "gajah", "musang"];
animals.sort();
console.log(animals);

console.log("\n");
// ascending
console.log("Ascending");
let array = [8, 9, 1, 2, 3, 4];
console.log(array);
array.sort((a, b) => {
  console.log(a, b, array);
  return a - b;
});
// print hasil
console.log(array);

console.log("\n");
// ascending
console.log("Descending");
let array2 = [8, 9, 1, 2, 3, 4];
console.log(array2);
array2.sort((a, b) => {
  console.log(a, b, array2);
  return b - a;
});
// print hasil
console.log(array2);

console.log("\n");
// .slice()
var angka = [0, 1, 2, 3];
var irisan = angka.slice(1, 3);
var salinAngka = angka.slice();
console.log(angka);
console.log(irisan);
console.log(salinAngka);
