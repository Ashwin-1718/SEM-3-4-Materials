import { useState } from "react";

 function Vote({ age }) {
    if (age >= 18) {
        return <Eligible age={age} />;
    } else {
        return <NotEligible age={age} />;
    }

    function Eligible({ age }) {
        const [voted, setVoted] = useState(null);

        const handleVote = (option) => {
            setVoted(option);
        };

        return (
            <div>
                <h1>{age} - You are eligible to vote.</h1>
                {voted ? (
                    <h2>Thanks for voting option {voted}!</h2>
                ) : (
                    <div>
                        <h3>Choose your option:</h3>
                        <button onClick={() => handleVote(1)}>Option 1</button>
                        <button onClick={() => handleVote(2)}>Option 2</button>
                        <button onClick={() => handleVote(3)}>Option 3</button>
                        <button onClick={() => handleVote(4)}>Option 4</button>
                    </div>
                )}
            </div>
        );
    }

    function NotEligible({ age }) {
        return <h1>{age} - You are not eligible to vote.</h1>;
    }
}

export default Vote;