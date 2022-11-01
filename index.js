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
  * @return {Value}: Function returns datatype of input value as a string
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


/**
 * contains: Function takes in an array and value as inputs. Function returns true if input array contains input value and false otherwise
 * @param {Array}: Function takes in an input array
 * @param {Value}: Function takes in an input value
 * @return {Boolean}: Function returns a boolean 
 */

function contains(arr, val) { 
    return arr.includes(val) ? true : false; 
}

module.exports.contains = contains; 


/**
 * unique: Function takes in an input array and returns an array with all duplicates removed
 * @param {Array}: Function takes in an input array
 * @return {Array}: Function returns an array
 */

function unique(arr) { 
    var newArray = []; 
    for(var i = 0; i < arr.length; i++) { 
        var indexNum = _.indexOf(arr, arr[i]); 
        if(indexNum === i) { 
            newArray.push(arr[i]); 
        }
    } 
    return newArray; 
}

module.exports.unique = unique; 


/**
 * filter: Designed to iterate through an array and create a new array filled with elements that pass a test provided by a function, without changing the original array
 * @param {Array}: Function takes in an input array
 * @param {Function} action: The Function to be applied to each value in the array
 * @return {Array}: Function returns a new array of elements for which calling function returned true
 */

function filter(arr, func) { 
    var newArray = []; 
    for(var i = 0; i < arr.length; i++){ 
        if(func(arr[i], i, arr) === true) { 
            newArray.push(arr[i]); 
        }
    } 
    return newArray; 
}

module.exports.filter = filter; 


/**
 * reject: Designed to iterate through an array and create a new array filled with elements that pass a test provided by a function, without changing the original array
 * @param {Array}: Function takes in an input array
 * @param {Function} action: The Function to be applied to each value in the array
 * @return {Array}: Function returns a new array of elements for which calling function returned false
 */

function reject(arr, func) { 
    var newArray = []; 
    for(var i = 0; i < arr.length; i++){ 
        if(func(arr[i], i, arr) === false) { 
            newArray.push(arr[i]); 
        }
    } 
    return newArray; 
}

module.exports.reject = reject; 


/**
 * partition: Designed to take in an array as an input and return two arrays - the first array containing the elements that pass the function test, and the second array containing the remaining input array elements
 * @param {Array}: Function takes in an input array
 * @param {Function} action: The Function to be applied to each value in the array
 * @return {Array}: Function returns an array that is made of two sub-arrays
 */

function partition(arr, func) { 
    var newArray = []; 
    var falseArray = []; 
    var trueArray = []; 
    for(var i = 0; i < arr.length; i++) { 
        if(func(arr[i], i, arr) === true) { 
            trueArray.push(arr[i]); 
        } else { 
            falseArray.push(arr[i]); 
        }
    }
    newArray.push(trueArray); 
    newArray.push(falseArray); 

    return newArray; 
}

module.exports.partition = partition; 


/**
 * map: Designed to create a new array populated with the results of calling a provided function on every element in the calling array
 * @param {Array or Object} collection: Function takes in an input array or object over which to iterate
 * @param {Function} action: The Function to be applied to each value in the collection
 * @return {Array}: Function returns the value of each Function call in a new array
 */

function map(collection, func){ 
    var newArray = []; 
    if(Array.isArray(collection) === true) { 
        for(var i = 0; i < collection.length; i++) { 
            newArray.push(func(collection[i], i, collection)); 
        }
    } else { 
        for(var key in collection) { 
            newArray.push(func(collection[key], key, collection)); 
        }
    }
    return newArray; 
}

module.exports.map = map; 


/**
 * pluck: Function takes in an array of objects and a property as inputs and returns an array containing the value of the input property for every element in the input array
 * @param {Array}: Function takes in an array of objects
 * @param {Property}: Function takes in an input property
 * @return {Array}: Function returns an array 
 */

function pluck(arr, property) { //create a function _.pluck that takes in two inputs, arr and key
    return _.map(arr, function(e) {return e[property]}) //return an array containing the value of propery for every element in array using the _.map function
}

exports.module.pluck = pluck; 


/**
 * every: Designed to test whether all elements in the input array pass the test implemented by the provided function. It returns a boolean value. 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} action: The Function to be applied to each value in the collection
 * @return {Boolean}: Function returns a boolean 
 */

function every(collection, func) { 
    if(func === undefined) {
        if(Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) { 
                if(!collection[i]) { 
                    return false; 
                }
            }
        } else { 
            for(let key in collection) { 
                if(!collection[key]) { 
                    return false; 
                }
            }
        }
    } else { 
        if(Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
                if(func(collection[i], i, collection) === false) {
                    return false; 
                }
            }
        } else { 
            for(let key in collection) {
                if(func(collection[key], key, collection) === false) { 
                    return false; 
                }
            }
        }   
    }
    return true; 
}

module.exports.every = every;


/**
 * reduce: Designed to execute a callback function on each element of the input array, in order, passing in the return value from the calculation on the preceeding element, resulting in a single value.
 * @param {Array}: Function takes in an input array
 * @param {Function} action: The Function to be applied to each value in the array
 * @param {Seed}: Function takes in an input seed as an initial starting value
 * @return {Value}: Function returns a value
 */

function reduce(array, func, seed){
    let result;
    if(seed === undefined) { 
        result = array[0];
        for(let i = 1; i < array.length; i++){ 
            result = func(result, array[i], i, array); 
        }
    } else { 
        result = seed; 
        for(let i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array);
        }
    }
    return result; 
}

module.exports.reduce = reduce; 


/**
 * extend: Function takes in a number of objects as inputs and copies the properties of each subsequent object input into the initial input object
 * @param {Object}: Function takes in an initial object input
 * @param {Object}: Function takes in an object input
 * @param {...Objects}: Function takes in any number of object inputs
 * @return {Object}: Function returns an object
 */

function extend(object1, object2, ...objects) { 
    Object.assign(object1, object2, ...objects)  
    return object1; 
}

module.exports.extend = extend; 