// var obj = [
//   {
//     name: "Asep",
//     score: 90,
//     class: "adonis",
//   },
//   {
//     name: "Ahmad",
//     score: 85,
//     class: "vuejs",
//   },
//   {
//     name: "Regi",
//     score: 74,
//     class: "adonis",
//   },
//   {
//     name: "Afrida",
//     score: 78,
//     class: "reactjs",
//   },
// ];

// const nilai = obj.filter((value) => value.class === "adonis");
// const nilaiAdonis = nilai.reduce((prev, current) => {
//   return prev.score > current.score ? prev.score : current.score;
// });
// console.log(nilai);
// console.log(nilaiAdonis);

function nilaiTertinggi(siswa) {
  const nilaiAdonis = siswa.filter((value) => value.class === "adonis");
  const nilaiVueJs = siswa.filter((value) => value.class === "vuejs");
  const nilaiReactJs = siswa.filter((value) => value.class === "reactjs");

  const getHighestScore = (arr) => {
    let highestScore = 0;
    if (arr.length === 1) {
      return arr[arr.length - 1];
    } else {
      highestScore = arr.reduce((prev, current) => {
        return prev.score > current.score ? prev : current;
      });
    }
    return highestScore;
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
