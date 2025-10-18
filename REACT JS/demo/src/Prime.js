import React from "react";
function Prime({ number }) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrime(number)) {
        return <h1>{number} is a Prime number.</h1>;
    } else {
        return <h1>{number} is not a Prime number.</h1>;
    }

    //   return (
    //     <h1>
    //       {number} is {isPrime(number) ? "a Prime" : "not a Prime"} number.
    //     </h1>
    //   );
}

export default Prime;
