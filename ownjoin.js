let arr = [26, 04, 1997, "saturday", 08, 15];

Array.prototype.ownJoin = function (arg = "") {
  const arr1 = this;
  let join = "";
  for (let i = 0; i < arr1.length - 1; i++) {
    join += "" + arr1[i] + arg;
  }
  join += "" + arr1[arr1.length - 1];
  return join;
};

console.log("Polyfill for join", arr.ownJoin("-"));
console.log("Inbuilt join method", arr.join("-"));
