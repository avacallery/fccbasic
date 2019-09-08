function truncateString(str,num) { 
    var truncatedString = "";
    // if (var i = 0; )
    str.slice(str.length - num.length) === truncatedString + "...";
    return str;
}


console.log(truncateString("A-tisket a-tasket a green a yellow basket", 8)); 