// This is a custom module which can be imported fro other classes or modules for the use 
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
};
// this helps to return the variables or the funtions that can be accessed when the module is imported
module.exports = {
    avg: average,
    name: "Ashish"
};