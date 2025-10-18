function Goal(props) {
    const a = props.a;
    if (a) {
        return <Ygoal />
    }
    else {
        return <Xgoal />
    }

    function Ygoal() {
        return <h1>Goal achieved!</h1>
    }
    function Xgoal() {
        return <h1>Goal not achieved yet.</h1>
    }
}

export default Goal;