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
  * 
  * 
  */