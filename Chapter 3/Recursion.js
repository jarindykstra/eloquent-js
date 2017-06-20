function isEven(num) {
    var workingNumber = num;
    if (workingNumber === 0 || workingNumber - 2 === 0) {
        return true;
    } else if (workingNumber === 1 || workingNumber - 2 === 1) {
        return false;
    } else {
        workingNumber = workingNumber - 2;
        return isEven(workingNumber);
    }
}

console.log(isEven(8));
