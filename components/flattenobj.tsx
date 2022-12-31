// create a function that can flatten objects

export function flattenObj(obj: object) {
    let flatObj = {};
    let objNames: string[] = Object.keys(obj);
    return  new Promise((resolve, reject) => {
        
        resolve(flatObj);
        reject("Could not flatten the object.");
    });
    // Make the function asynchronos ✔
    
    // Create an empty obj ✔
    // Create an array from the objects name and length

    // Create a loop to go through the new array
        // Check if the current object is an array or object
            // if true use the naming convention . ie: obj.smallerobj
            // if array use a num as the ending instead of a name. ie: obj.innerArray.0, obj.innerArray.1, obj.innerArray.2
            // Use recurisive function to go through each of the items
        // Add the current item to the obj
    
    // return the flattened obj

}