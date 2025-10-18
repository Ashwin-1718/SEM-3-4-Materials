import React from "react";
import { useEffect, useState } from "react";

export default function EffectDemo() {
    const [no, setNo] = React.useState(0);

    React.useEffect(() => {
        document.title = `Count: ${no}`;
    }, [no]);

    return (
        <>
            <button onClick={() => setNo(no + 1)}>
                {no}
            </button>
        </>
    );
}