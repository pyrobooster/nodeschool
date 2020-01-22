let result = 0;

for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result);



// console.log(process.argv);
// let indexNum = 0;
// const proceesArgvArray = process.argv;

                                // console.log(proceesArgvArray[3]); 

// tells me how long the array is
                                // console.log(process.argv.length); //works

// console logs a specific index of that array
// console.log(process.argv[2]); this works

// works too
// console.log(process.argv[indexNum]);

                                // console.log(process.argv[indexNum]); //works

//WORKS finally 2 hours in

// const inputVals = process.argv.slice(2, process.argv.length)

//  inputVals.forEach(arrNums => {
//     indexNum += Number(arrNums);
//  });    

// console.log(indexNum);

//NOW HOW DO I ADD THEM!

// doesnt error but doesnt add either
// var arrayLength = proceesArgvArray.length;
// for (var i = 2; i < arrayLength; i++) {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   console.log(proceesArgvArray.reduce(reducer));
// }

//function getSum(total, num) {
// return total;
//  console.log(total)
//}
//function myFunction(item) {
// process.argv.reduce(getSum, 3);
// console.log(item);
//}



// if (indexNum < length.process.argv) {
//    indexNum++;
//    +process.argv[indexNum])
// }