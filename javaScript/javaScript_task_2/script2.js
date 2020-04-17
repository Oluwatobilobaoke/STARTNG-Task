// Create data array with the given values
let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 },
  ];
  // declare interestCalculator function accepting an array argument/parameter
  function interestCalculator(arr) {
    let interestData = [];
    let rate, interest;
    for (let obj of arr) {
      // Determine applicable rate within the function 
      if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
        rate = 3;
      } else if (obj.principal >= 2500 && obj.time >= 3) {
        rate = 4;
      } else if (obj.principal < 2500 || obj.time <= 1) {
        rate = 2;
      } else {
        rate = 1;
      }
      // Calculate simple interest with given formula
      interest = (obj.principal * rate * obj.time) / 100;
      interestData.push({principal: obj.principal, time: obj.time, rate: rate, interest: interest})
    }
    // log interestData to console
    console.log(interestData);
    console.log(data)
    // function returns array of objects 'interestData' with corrsponding keys
     return interestData;
  }
  // call function with data array
  interestCalculator(data);