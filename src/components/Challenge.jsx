const Challenge = () => {
    const x = 2;
    const y = 3;

    const renderingOnclick = (x,y) => {
        console.log(x + y)
        return <h1>When I add {x} to {y} I get {x+y}</h1>
    }

    return (
        <div>
            <button onClick={renderingOnclick()}>CLICK ME NOW!!!</button>
        </div>
    );
}

export default Challenge;