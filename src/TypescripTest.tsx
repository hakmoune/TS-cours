import React from 'react';

type TColor = "Green" | "Black" | "Blue" | "Yellow" | "Gris";

interface IAppPropos {
    name: string;
    age: number;
    email?: string;
    color: TColor;
    background: TColor;
    padding: [number, number, number, number];
    children: React.ReactNode;
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
    onClick: () => void;
}

const TypescripTest: React.FC<IAppPropos> = (
    { name, age, email, color, background, padding, children, state, setState, onClick }
): JSX.Element => {

    const title: JSX.Element = <h2>I'm a JSX element</h2>;

    const handleIncrement = () => {
        setState(state + 1);
    }

    return (
        <div>
            <h1>{children}</h1>

            {title}

            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>Color: {color}</p>
                <p>Background: {background}</p>
                <p>Padding: {`${padding[0]}px, ${padding[1]}px, ${padding[2]}px, ${padding[3]}px`}</p>
            </div>

            <button onClick={onClick}>Click me to display a console log</button>
            <button onClick={handleIncrement}>Increment Counter: {state}</button>
        </div>
    );
}

export default TypescripTest;
