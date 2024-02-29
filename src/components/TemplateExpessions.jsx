import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = "Bonnie";
    const data = {
        age: 40,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Hello {name}, how you doin'?</h1>
            <p>You are a {data.job}. You are {data.age} years old.</p>
            <MyComponent />
        </div>
    );

}

export default TemplateExpressions