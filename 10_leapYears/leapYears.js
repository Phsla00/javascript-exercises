const leapYears = function(year) {
    const divisibleFour = year % 4 === 0;
    const divisible100 = year % 100 === 0;
    const divisible400 = year % 400 === 0;
    
    if(divisibleFour && (!divisible100 || divisible400)) {
        return true;
    }else { return false }
    
};

// Do not edit below this line
module.exports = leapYears;
