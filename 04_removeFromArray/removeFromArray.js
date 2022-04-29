const removeFromArray = function (...args) {

    const array = args[0];
    const newArray = [];

    array.forEach((item) => {
        if(!args.includes(item)) {
            newArray.push(item);
        }
        
    });
   return newArray;
};



/*
    for (const item of array) {
        if (item = element) {
            array = array.splice(item.indexof(), 1)
        } else {
            array = array;
        }
        return array;
    }
*/

/*
Works with step 1

const removeFromArray = function(array, element) {
        let searchIndex = array.indexOf(element);
        array.splice(searchIndex, 1);
        return array;
    }

    let elementsArray = new Array(elements);
    let searchIndex = array.indexOf(elementsArray[0]);
    array.splice(searchIndex, 1);
    return array;


    */

// Do not edit below this line
module.exports = removeFromArray;
