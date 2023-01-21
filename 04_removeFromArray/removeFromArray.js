const removeFromArray = function(array,...removeItem) {
    let testArray = array;

    for (let i = 0; i < removeItem.length; i++) {
	    for (let item of testArray) {
	        if (item === removeItem[i]) {
	            testArray.splice(testArray.indexOf(item),1);
	        }
	    }
    }

    return testArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// Look through every item in the array
// If the item in the array matches the items that need removing, remove it
// Return the final item