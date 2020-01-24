// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. 
//Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

console.log(array.flat(2));



// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

let newArray = greeting.map(value => value.join(' '));


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

//let newString = greeting.join(' ');//不行，會有逗號

let newArray = greeting.map(value => value.join(' '));
let newString = newArray.join(' ');
console.log(newString);

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
let arrayVarried = trapped
arrayVarried = arrayVarried.flat(50);
console.log(arrayVarried);


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
let answerString = userEmail3.trimStart();
console.log(answerString);


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
let answerArray = Object.entries(users);
console.log(answerArray);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

let answerArray = Object.entries(users).map(
    (elements) => {
        elements[1] = elements[1]*2;
        return elements;
    }
);
console.log(answerArray);


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

let answerObj = Object.fromEntries(answerArray);
console.log(answerObj);


//---------------------

try {
    a + 'yes';
} catch {
    console.log('this is an error');
}