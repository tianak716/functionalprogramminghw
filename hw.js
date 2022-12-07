function alphabeticalOrder(arr) {
 return arr.sort();
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);




const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
var localArray = arr.slice();
return localArray.sort((a,b) => a-b)

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));




function splitify(str) {
  // Only change code below this line

  return str.split(/[\s,.-]/);
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));



function sentensify(str) {
  // Only change code below this line
  return str.split(/[\s.,-]/).join(" ");

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));



vvar globalTitle = "Winter Is Coming.";
function urlSlug(title) {
return title.split(" ").filter(word => word!== "").map(word => word.toLowerCase()).join("-");

}
// Only change code above this line
console.log (urlSlug("Winter Is Coming."));



function checkPositive(arr) {
  // Only change code below this line

return arr.every(num => num > 0);
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));



function checkPositive(arr) {
  // Only change code below this line
return arr.some(num => num > 0);

  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));
git remote add origin git@github.com:tianak716/functionalprogramminghw.git



function add(x) {
  // Only change code below this line
return function (y) {
  return function(z) {
    return x + y + z;
  }
}

  // Only change code above this line
}

console.log(add(10)(20)(30));


