// function Number(props) {
//     const a = props.a;

//     if (a % 2 === 0) {
//         return <Even />;
//     } else {
//         return <Odd />;
//     }

//     function Even() {
//         return <h1>{a} is an even number.</h1>;
//     }

//     function Odd() {
//         return <h1>{a} is an odd number.</h1>;
//     }
// }

// export default Number;

// Logical Opretor
function Number(props) {
    return (
        <>
            <h1>Conditional Logical Operator Example :)</h1>
            {props.n % 2 === 0 ? (
                <h2>{props.n} is an Even Number!</h2>
            ) : (
                <h2>{props.n} is an Odd Number!</h2>
            )}
        </>
    );
}

export default Number;