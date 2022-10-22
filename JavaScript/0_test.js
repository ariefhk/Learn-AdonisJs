function kelompokAngka(arr) {
  //Code disini
  let angkaGanjil = [];
  let angkaGenap = [];
  let angkaKelTiga = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (arr[i] % 3 === 0) {
        angkaKelTiga.push(arr[i]);
      } else {
        angkaGanjil.push(arr[i]);
      }
    } else if (arr[i] % 3 === 0) {
      angkaKelTiga.push(arr[i]);
    } else {
      angkaGenap.push(arr[i]);
    }
  }

  return [angkaGanjil, angkaGenap, angkaKelTiga];
}

//Test Case

console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]));

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13, 27, 11, 15]));

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]));

//output:[[],[],[]]

function hitungVokal(str) {
  //code disini
  let vokal = ["a", "i", "u", "e", "o"];
  let countVokal = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vokal.length; j++) {
      if (str[i].toLowerCase() === vokal[j]) {
        countVokal += 1;
      }
    }
  }
  return countVokal;
}

// Test Cases

console.log(hitungVokal("Adonis")); // Output:3

console.log(hitungVokal("Error")); //Output:2

console.log(hitungVokal("Eureka")); //Output:4

console.log(hitungVokal("Rsch")); // Output: 0

function tandaiA(str) {
  // code di sini
  var string = "";
  var char = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a") {
      char = "x";
      string = string + char;
    } else {
      char = str.charAt(i);
      string = string + char;
    }
  }
  return string;
}

// Tes Cases
console.log(tandaiA("abrakadabra")); // xbrxkxdxbrx
console.log(tandaiA("garuda")); // gxrudx
console.log(tandaiA("kucing")); // kucing

function graduate(arr) {
  // code di sini
  let laravel = arr.filter((value) => value.class === "Laravel");
  let vuejs = arr.filter((value) => value.class === "Vuejs");
  let reactjs = arr.filter((value) => value.class === "Reactjs");

  const getGrade = (arr) => {
    let datas = [];

    for (let i = 0; i < arr.length; i++) {
      let data = {};
      data.name = arr[i].name;
      data.score = arr[i].score;
      if (arr[i].score < 60) {
        data.grade = "participated";
      } else if (arr[i].score >= 60 && arr[i].score <= 85) {
        data.grade = "completed";
      } else {
        data.grade = "mastered";
      }
      datas.push(data);
    }
    return datas;
  };

  return {
    Laravel: getGrade(laravel),
    Vuejs: getGrade(vuejs),
    Reactjs: getGrade(reactjs),
  };
}

// TEST CASE
// Contoh Input

var arr = [
  { name: "Ahmad", score: 80, class: "Laravel" },

  { name: "Regi", score: 86, class: "Vuejs" },

  { name: "Robert", score: 59, class: "Laravel" },

  { name: "Bondra", score: 81, class: "Reactjs" },
];

console.log(graduate(arr));

//Output

// {

// Laravel:[{name:"Ahmad",score:80, grade: "completed"}, { name: "Robert", score: 59, grade: "participated"}],

// Vuejs : [{name:"Regi",score:86, grade: "mastered"}],

// Reactjs:[{name:"Bondra",score:81, grade: "completed"}]

// }
