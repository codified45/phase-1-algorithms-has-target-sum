function hasTargetSum(array, target) {
  // Write your algorithm here
    // let startIndex = 0;
    // let endIndex = array.length - 1;
    let j = 0;
    for (const num of array) {
      for (let i = 0; i < array.length; i++) {
        if ((array[i] + num === target) && (i != j)) return true;
      };
      j++;
    };
    return false;
};

function hasTargetSum2(array, target) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if ((array[i] + array[j] === target) && (i != j)) {
          return true;
          };
        };
      };
    return false;
};

hasTargetSum([1, 2, 5], 4);

function hasTargetSum3(array, target) {

};


/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here

  - probably can make a more efficient version by sorting the array first in ascending order, then if the current number is bigger than half the target number, we could stop checking the later half of the array. Same thing, if the number is smaller than half, we can start the index after the current number being checked. 
*/

/*
  Add written explanation of your solution here
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
