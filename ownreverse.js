let arr = [26, 04, 1997, "saturday", 8, 15];

Array.prototype.ownReverse = function () {
  let reverse = [];
  for (let i = this.length - 1; i >= 0; i--) {
    reverse.push(this[i]);
  }
  return reverse;
};

console.log("Polyfill for reverse", arr.ownReverse());
console.log("Inbuilt reverse method", arr.reverse());
