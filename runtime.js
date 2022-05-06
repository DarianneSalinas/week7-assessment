//WEEK 7 ASSESSMENT PART 1

const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){      //O(n)
        let num = nums[i] * 2;
        new_nums.push(num);     //time complexity of O(1)
    }

}
//single loop
//O(n) dynamic
//.push has a time complexity of O(1)
//overall time complexity: O(n)



function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){  //O(n)
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

//single loop, dynamic
//function time complexity is O(n)
//.unshift has time complexity of O(n)
//overall time complexity: O(n^2)



function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


// console.log('Results for the extraLargeArray');
console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
