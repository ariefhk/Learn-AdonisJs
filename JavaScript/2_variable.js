// Variable
// String, number ang bool
var name = "Arief Rachman Hakim";
var angka = 12;
var isMale = true;

console.log(name);
console.log(angka);
console.log(isMale);

// waspada, it will be None
var items;
console.log(items);

// Operator

// 1. aritmatika
// Tambah (+)
console.log(5 + 4);

// Kurang (-)
console.log(5 - 4);

// Kali (*)
console.log(5 * 4);

// Bagi (/)
console.log(5 / 4);

// Modulus (%)
console.log(5 % 4);

// 2. Assignment
var num;
num = 10; // Contoh assignment variable num dengan nilai 10
console.log(num);

// 3. Perbandingan
// Equal Operator (==)
var numEqual = 100;
console.log(numEqual == 100); // true
console.log(numEqual == 20); // false

// Not Equal ( != )
var numNotEqual = 100;
console.log(numNotEqual == 100); // false
console.log(numNotEqual == 20); // true

// Strict Equal ( === )
var strictEqual = 8;
console.log(strictEqual == "8"); // true, padahal "8" adalah string.
console.log(strictEqual === "8"); // false, karena tipe data nya berbeda
console.log(strictEqual === 8); // true

// Strict Not Equal ( !== )
var strictNotEqual = 11;
console.log(strictNotEqual != "11"); // false, padahal "11" adalah string
console.log(strictNotEqual !== "11"); // true, karena tipe datanya berbeda
console.log(strictNotEqual !== 11); // false

// Kurang dari & Lebih Dari ( <, >, <=, >=)
var number = 17;
console.log(number < 20); // true
console.log(number > 17); // false
console.log(number >= 17); // true, karena terdapat sama dengan
console.log(number <= 20); // true

// 4. Kondisional
// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

// AND ( && )
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true
