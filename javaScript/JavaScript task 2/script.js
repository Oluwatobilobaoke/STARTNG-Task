let _arrayObject = [{ principal: 2500, time: 1.8 },
{ principal: 1000, time: 5 },
{ principal: 3000, time: 1 },
{ principal: 2000, time: 3 }
]


function check(pricipal, time) {
    if (pricipal >= 2500 && (time > 1 && time < 3)) {
        return 3;
    } else if (pricipal >= 2500 && (time >= 3)) {
        return 4;
    } else if (pricipal < 2500 || (time <= 1)) {
        return 2;
    } else {
        return 1;
    }
}

/**
 * 
 * @param {Array<object>} __ar The Array of objects
 */
function calculateInterest(__ar) {
    let rate = 1;
    let results = [];
    __ar.forEach(object => {
        rate = check(object.principal, object.time);
        let interest = (object.principal * object.time * rate) / 100
        results.push({ principal: object.principal, time: object.time, rate: rate, interest: interest });
    });
    return results; // return the final results that contains the objects
}

console.log(calculateInterest(_arrayObject));