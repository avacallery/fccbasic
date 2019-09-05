//Return the length of the longest word in the provided sentence
//Response should be a number

function findLongestWordLength(string) {
    var stringSplit = string.split(" "); 
    var longestWord = 0; 
    //initiates a variable 
    for (var i = 0; i < stringSplit.length; i++){
        if (stringSplit[i].length > longestWord) {
            longestWord = stringSplit[i].length;
        }   
    }
    return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); 