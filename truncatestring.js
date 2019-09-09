function truncateString(str,num) { 
    var truncatedString = "";
    // if ( )
    str.slice(str.length - num.length) === truncatedString + "...";
    return str;
}


console.log(truncateString("A-tisket a-tasket a green a yellow basket", 8)); 


//function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num && num > 3) {
//     return str.slice(0, (num - 3)) + '...';
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }

// }