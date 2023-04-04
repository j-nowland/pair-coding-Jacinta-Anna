// console.log("hello")
// console.log("hello again")
// console.log("somethingelse")
// console.log("test")

//Creat e a function that takes an array of numbersand strings and return a new array without strings.
//ex. myNewArray ([1, 2, 'Ali', 4, 5, 'Kahwaji']) => [1,2,4,5]

function arrayNumber(arr) {
    return arr.filter(i => typeof i == 'number')
}
console.log (arrayNumber ([1,3,5,'Anna',65,2, 'Jacinta',12,15]))