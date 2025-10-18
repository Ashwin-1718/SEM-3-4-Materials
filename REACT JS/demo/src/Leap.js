export default function Leap({ year }) {
    if (isLeapYear(year)) {
        return <LeapYear year={year} />;
    } else {
        return <NotLeapYear year={year} />;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function LeapYear({ year }) {
        return <h1>{year} is a Leap Year.</h1>;
    }

    function NotLeapYear({ year }) {
        return <h1>{year} is not a Leap Year.</h1>;
    }
}

