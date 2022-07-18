function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let element = 0; element < array.length; element++) {
    debugger
    let matchValue = target - array[element]
    for (let element2 = element+1; element2 < array.length; element2++) {
      if (array[element2] === matchValue) {
        return true
      }
    }
  }
  return false
}
console.log('test', hasTargetSum([[1, 2, 5], 4]))

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
 


*/

/*
  Add written explanation of your solution here
  
  Could try to remove values higher than the target, but future uses could have negatives and it needs an extra iteration pass without saving that much
   2 options, similar complexities
  Option 1: Iterate through array, adding number to every number after and seeing if it matches target. O(n^2) - nested iteration
  Option 2: Iterate through array, subtracting number from target and seeing if result exists in remainder of array. O(n^2) - nested iteration
    Option 2.1: Iterate through array, subtracting number from target and seeking result. Since result is known, can order array and discarding halves that are less than the target 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
