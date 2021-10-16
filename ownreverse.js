let arr = [26, 04, 1997, "saturday", 8, 15];

Array.prototype.ownReverse = function () {
  let reverse = [];
  for (let i = this.length - 1; i >= 0; i--) {
    reverse.push(this[i]);
  }
  return reverse;
};

let arr = [26, 04, 1997, "saturday", 8, 15];
console.log("Polyfill for reverse", arr.ownReverse());
// [15, 8, "saturday", 1997, 4, 26]

console.log("Inbuilt reverse method", arr.reverse());
// [15, 8, "saturday", 1997, 4, 26]
