function truncateString(str,num) { 
    var truncatedString = "";
    str.slice(str.length - num.length) === truncatedString + "...";
    return str;
}


console.log(truncateString("A-tisket a-tasket a green a yellow basket", 8)); 