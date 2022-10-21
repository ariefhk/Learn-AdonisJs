// String is just list of char
var sentences = "Javascript";
console.log(sentences[0]); // "J"
console.log(sentences[2]); // "v"

// String Properties
// .length
var word = "JavaScript is awesome";
console.log(word);

// String Method
var name = "Arief Rachman Hakim";

// .charAt([index])
console.log(name.charAt(0)); //return char

// .concat([string])
var hobby = "Ngoding";
console.log(name.concat(" ", hobby));

// .indexOf([string/char])
var text = "dung, dung, ces";
console.log(text.indexOf("dung"));
console.log(text.indexOf("g")); //return pertama kali
console.log(text.indexOf("jreng")); //return -1 jika tidak ada

// .substring([index awal], [index akhir])
var car1 = "Lykan Hypersport";
// console.log(car1.indexOf("Hypersport"));
var car2 = car1.substring(6, car1.length);
console.log(car2);

// .toUpperCase() & .toLowerCase()
var letter = "This letter Is For You";
var upperLetter = letter.toUpperCase();
var lowerLetter = upperLetter.toLowerCase();
console.log(upperLetter);
console.log(lowerLetter);

// .trim()
var username = " administrator ";
var newUsername = username.trim();
console.log(newUsername);

// Mengubah tipe data

// String([number])
var int = 12;
var real = 3.45;
var arr = [6, 7, 8];

var strInt = String(int);
var strReal = String(real);
var strArr = String(arr);

console.log(strInt); // '12'
console.log(strReal); // '3.45'
console.log(strArr); // '6,7,8'

// .toString()
var number = 21;
console.log(number.toString()); // '21'
var array = [1, 2];
console.log(array.toString()); // '1,2'

// Number([String])
var number1 = Number("90"); // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5"); // number3 = NaN

console.log(number1);
console.log(number2);
console.log(number3);

// parseInt([String]) dan parseFloat([String])
var intNew = "89";
var realNew = "56.7";
var strInt_1 = parseInt(intNew); // strInt_1 = 89
var strInt_2 = parseInt(realNew); // strInt_2 = 56
var strReal_1 = parseFloat(intNew); // strReal_1 = 89
var strReal_2 = parseFloat(intNew); // strReal_2 = 56.7
console.log(strInt_1);
console.log(strInt_2);
console.log(strReal_1);
console.log(strReal_2);
