function repeatStringNumTimes(str, num) {
    var repeatString = ""; 
    while (num > 0) {
        repeatString += str; 
        num--;
    }
    return repeatString;
  }
repeatStringNumTimes("abc", 3);