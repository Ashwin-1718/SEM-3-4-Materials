export default function Smallest({ a, b, c }) {
    if (!a || !b || !c) {
        return <h1>Please provide three numbers.</h1>;
    }
    return <SmallestNumber a={a} b={b} c={c} />;

    function SmallestNumber({ a, b, c }) {
        const smallest = Math.min(a, b, c);
        return <h1>The smallest number is: {smallest}</h1>;
    }
}
