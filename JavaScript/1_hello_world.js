var math = {};

math.getRandoNumber = (min, max) => {
  min = typeof min == "number" && min % 1 === 0 ? min : 0;
  max = typeof max == "number" && max % 1 === 0 ? max : 0;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < 10; i++) {
  console.log(math.getRandoNumber(1, 10));
}

module.exports = math;
