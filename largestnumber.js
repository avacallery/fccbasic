//Return an arrau consisting of the largest number from each provided sub-array
//For loop and access each mumber with array syntax arr[i]



function largestOfFour(arr) {
    results = [[], [], [], []];
    for (var i = 0; i < arr.length; i++) {
        var largestNumber = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber; 
    }
    return results; 
} 
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

