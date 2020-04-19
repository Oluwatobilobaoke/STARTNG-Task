const divisible = (number) => {
    if (typeof number === 'number') {
        const myNewlyFormed = [];
        for (let i = 1; i <= number; i++) {
            if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
                myNewlyFormed.push(i);
            }

            if (i % 2 === 0) {
                myNewlyFormed.push('yu');
                if (i % 5 === 0) {
                    myNewlyFormed[myNewlyFormed.length - 1] = 'yu-oh';
                }

                if (i % 3 === 0) {
                    myNewlyFormed[myNewlyFormed.length - 1] = 'yu-gi';
                    if (i % 5 === 0) {
                        myNewlyFormed[myNewlyFormed.length - 1] = 'yu-gi-oh';
                    }
                }
            }

            if (i % 2 == 0 && i % 3 === 0) {
            } else {
                if (i % 3 === 0) {
                    myNewlyFormed.push('gi');
                    if (i % 5 === 0) {
                        myNewlyFormed[myNewlyFormed.length - 1] = 'gi-oh';
                    }
                }
            }

            if (i % 2 == 0 && i % 5 === 0) {
            } else {
                if (i % 3 == 0 && i % 5 === 0) {
                } else {
                    if (i % 5 === 0) {
                        myNewlyFormed.push('oh');
                    }
                }
            }
        }
        return myNewlyFormed;
    }
    return 'Enter a valid number';
}
divisible(100);

divisible(10);