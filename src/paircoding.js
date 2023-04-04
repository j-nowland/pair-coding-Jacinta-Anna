// console.log("hello")
// console.log("hello again")
// console.log("somethingelse")
// console.log("test")

//Exercise 1
//Creat e a function that takes an array of numbersand strings and return a new array without strings.
//ex. myNewArray ([1, 2, 'Ali', 4, 5, 'Kahwaji']) => [1,2,4,5]
//SOLUTION:
// function arrayNumber(arr) {
//     return arr.filter(i => typeof i == 'number')
// }
// console.log (arrayNumber ([1,3,5,'Anna',65,2, 'Jacinta',12,15]))



//Exercise 2
//Create a function that takes an array of arrays (2-d array) with numbers and returns new array with the 
//largest numbers of each.
//ex. arrayOfArrays([[1,2,3], [4,5,6], [20,30,35]]) => [3, 6, 100]



// function arrayOfArrays (arr){                       //passed the parameter arr
//     let newArray = []                               //created new array that will hold the output
//     for (let i=0; i<arr.length; i++) {
//     let largest = arr[i][0]                         //set up the benchmark to compare
//         for (let j=0; j<arr[i].length; j++){
//             if (arr[i][j]>largest){
//                 largest = arr [i][j]
//             }
//         }
//         newArray.push(largest)
//     }
//     return newArray
// }
// console.log (arrayOfArrays([[1,2,3], [4,5,6], [20,30,35]]))

// Exercise 3
// Write a function that calculates an area of a rectangule
// function rectangleArea(a,b){
//     return (a*b)
// }
// console.log(rectangleArea(2,4))

// Exercise 4
// Create a function to reverse an array 
// ex. revArr([1,2,3,4]) => [4,3,2,1]
function revArray (arr){
    newArr=[]
    for (let i= arr.length -1; i> -1; i--){
        newArr.push(arr[i])
}
return newArr
}

console.log (revArray([1,2,3,4]));