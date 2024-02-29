const Events = () => {

    const handleMyEvent = (e) => {
        console.log('Event activated');
        console.log(e);
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Rendering this!</h1>
        } else {
            return <h1>Rendering this too!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click me!</button>
            </div>
            <div>
                <button onClick ={() => console.log('You clicked on me too S2S2')}>Click me too!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>

    )

};

export default Events