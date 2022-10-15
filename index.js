'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Function takes in an input value and returns it unchanged.
 * 
 * @param {Value}: Function takes in any input value
 * @return {Value}: Function returns input value unchanged
 * 
 */
 var _ = {}; // use function declaration syntax
 function identity(value) {
     return value;
 }

 module.exports.identity = identity;



 /**
  * typeOf: Function takes in an input value and returns data type of input value
  * 
  * @param {Value}: Function takes in any input value
  * @return {Value}: Function returns data type of input value
  */

 function typeOf(value) {
    if(Array.isArray(value) === true) { 
        return "array"; 
    } else if(Array.isArray(value) !== true && value === null) { 
        return "null"; 
    }

    return typeof value; 
 }

 module.exports.typeOf = typeOf; 



 /**
  * first: Function takes in an array and a number as inputs and return the first number of items in array
  * @param {Array}: Function takes in an input array
  * @param {Number}: Function takes in an input number
  * @return {Array or Number}: Function returns an array literal if input array is not an array, the first element in input array if input number is not a number or not given, or any array of the first number of items in input array
  */

  _.first = function(arr, num) { 
    if(Array.isArray(arr) === false || num < 0) { 
        return [];
    }
    if(isNaN(num) === true) { 
        return arr[0]; 
    }
    if(num > arr.length) { 
        return arr; 
    }
    return arr.splice(0, num); 
}

module.exports.first = first;



 /**
  * last: Function takes in an array and a number as inputs and return the last number of items in array
  * @param {Array}: Function takes in an input array
  * @param {Number}: Function takes in an input number
  * @return {Array or Number}: Function returns an array literal if input array is not an array, the last element in input array if input number is not a number or not given, or any array of the last number of items in input array
  */

  _.last = function(arr, num) { 
    if(Array.isArray(arr) === false || num < 0) { 
        return []; 
    }  
    if(isNaN(num) === true) { 
        return arr[arr.length - 1]; 
    }
    if(num > arr.length) { 
        return arr; 
    }
    return arr.slice(-num); 
}

module.exports.last = last; 


/**
 * indexOf: Function takes in an array and a value as inputs and either returns the index of array that is the first occurance of value or returns -1 if value is not in array
 * @param {Array}: Function takes in an input array
 * @param {Value}: Function takes in an input value
 * @return {Number}: Function returns the index of input array that is the first occurance of value or -1 if value is not in array
 */

 function indexOf(arr, val) { 
    for(var i = 0; i < arr.length; i++) {  
        if(val === arr[i]) {  
            return i; 
        }
    }
    return -1; 
}

module.exports.indexOf = indexOf; 