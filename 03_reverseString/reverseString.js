const reverseString = function(string) {
    let rvString = "";
    for(let i = string.length; i > 0; i--) {
        rvString += string.slice(i-1, i);
    }
    return rvString;
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
