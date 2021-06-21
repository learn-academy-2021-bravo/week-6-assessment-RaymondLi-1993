// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]


describe ("story", ()=>{
  test ("returns the array with a story from array of objects", () =>{
      expect(story(people, capitalized)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// b) Create the function that makes the test pass.


/* 
------------ PSEUDO CODE --------------
// I first want to iterate over the entire array and break into the object to get the values from names/occupations
//I can use the method map as the return result is expected to be an array and map can help me itterate over the entire function
// I also noticed that the letters of the first & last name has to be capitalized
//I can create a helper function that will help me further break down just the object name 
//create a helper function that will further split the array down capitalize the first letters and rejoin them
//After the return of the helper function store the result in the variable and use string interperlation in the final result and return the array from map.
*/

const story = (array, capitalized) => {
  return array.map((elem) => {
      let name = capitalized(elem.name)
      return`${name} is a ${elem.occupation}.`;
  }) 
}

const capitalized = (elem)=> {
  let name = elem.split(" ")
   let string = `${name[0].slice(0,1).toUpperCase() + name[0].slice(1)} ${name[1].slice(0,1).toUpperCase() + (name[1].slice(1))}`
   return string
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ("remainderThree", ()=>{
  test ("returns the array with numberd elements only and divided by 3", () =>{
      expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})



// b) Create the function that makes the test pass.

/* -------PSEUDO CODE-----------     
//I want to first itterate through the entire array and filter out non-interger elements
//I than want to map over the entire array and take that element and return the remainder when divided into 3
//I can use the filter method to help filter out the non integer elements and than chain on the map method to return the elements divided by 3

*/

const remainderThree = (array) => {
    return array.filter((elem)=>{
        return typeof elem === "number"
    }).map((elem)=>{
        return elem % 3;
    })
}




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.

describe ("cubed", ()=>{
  test ("returns a single number added together, with all elements being raised to the 3rd power", () =>{
      expect(cubed(cubeAndSum1)).toEqual(99)
      expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})



// b) Create the function that makes the test pass.

/* 
-------------PSEUDO CODE-------------

//I want to take all the numbers and sum them together after I raise them to the 3rd power
//I can use the higher order function reduce to get a single digit answer
//I can use the Math.pow to raise the current element to the 3rd power and than add it to the accumulator in reduce.

*/

const cubed = (array) => {
    return array.reduce((acc, current) => {
        return acc += Math.pow(current, 3);
    }, 0);
}