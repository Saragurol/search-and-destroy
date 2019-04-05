'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	array.sort((a, b) => a-b)
	
	let midpt = Math.floor((array.length)/2)
	let arr1 = array.slice(0, midpt)
	let arr2 = array.slice(midpt)
	if (target >=arr2[0]){
		for(let j=0; j < arr2.length; j++){
			if(arr2[j] === target){
				return true
			}
		}
	}
	else{
		console.log("FIRST ELEMT", arr1[arr1.length-1])
		for(let i=0; i < arr1.length; i++){
			if(arr1[i] === target){
				return true
			}
		}
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch