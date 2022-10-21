var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
  ["Abduh", "Muhamad", "male", 1992],
  ["Ahmad", "Taufik", "male", 1985],
];

const arrayToObject = (array) => {
  let data = {};

  const getGender = (age) => {
    let now = new Date();
    let thisYear = now.getFullYear();

    if (!age || age > thisYear) {
      return `Invalid birth year`;
    } else {
      return thisYear - age;
    }
  };

  if (!array) {
    data = "Invalid Input";
  } else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        data[`${i + 1}. ${array[i][0]} ${array[i][1]}`] = {
          firstName: array[i][0],
          lastName: array[i][1],
          gender: array[i][2],
          age: getGender(array[i][3]),
        };
      }
    }
  }
  console.log(data);
};

arrayToObject(people);

function naikAngkot(arrPenumpang) {
  let rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  let titikNaik = 0;
  let titikTujuan = 0;
  let simpanData = [];

  const price = (titikNaik, titikTujuan) => {
    return (titikTujuan - titikNaik) * 2000;
  };

  if (!arrPenumpang) {
    return [];
  } else {
    for (let i = 0; i < arrPenumpang.length; i++) {
      let penumpang = arrPenumpang[i][0];
      let naikDari = arrPenumpang[i][1];
      let tujuan = arrPenumpang[i][2];

      for (let j = 0; j < rute.length; j++) {
        if (arrPenumpang[i][1] === rute[j]) {
          titikNaik = j;
        } else if (arrPenumpang[i][2] === rute[j]) {
          titikTujuan = j;
        }
      }
      simpanData.push({
        penumpang: penumpang,
        naikDari: naikDari,
        tujuan: tujuan,
        bayar: price(titikNaik, titikTujuan),
      });
    }
  }
  return simpanData;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

function nilaiTertinggi(siswa) {
  const nilaiAdonis = siswa.filter((value) => value.class === "adonis");
  const nilaiVueJs = siswa.filter((value) => value.class === "vuejs");
  const nilaiReactJs = siswa.filter((value) => value.class === "reactjs");

  const getHighestScore = (arr) => {
    let highestScore = {};

    if (arr.length === 1) {
      highestScore = arr[arr.length - 1];
    } else {
      highestScore = arr.reduce((prev, current) => {
        return prev.score > current.score ? prev : current;
      });
    }
    return {
      name: highestScore.name,
      score: highestScore.score,
    };
  };
  return {
    adonis: getHighestScore(nilaiAdonis),
    vuejs: getHighestScore(nilaiVueJs),
    reactjs: getHighestScore(nilaiReactJs),
  };
}

// TEST CASE
console.log(
  nilaiTertinggi([
    {
      name: "Asep",
      score: 90,
      class: "adonis",
    },
    {
      name: "Ahmad",
      score: 85,
      class: "vuejs",
    },
    {
      name: "Regi",
      score: 74,
      class: "adonis",
    },
    {
      name: "Afrida",
      score: 78,
      class: "reactjs",
    },
  ])
);

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }
