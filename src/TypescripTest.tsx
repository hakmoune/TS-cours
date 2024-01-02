import React from 'react';

const arr: string[] = ["mehdi", "hakmoune", "el"]
const arr2: [string, string, string, number] = ["mehdi", "hakmoune", "el", 11]
const arr3: (string | number)[] = ["mehdi", "hakmoune", "el", 11]

const obj: { name: string, age: number } = { name: "mehdi", age: 12 }
const obj2: { [key: string]: string } = { name: "mehdi", lastname: "hakmoune" }

const date: Date = new Date();

type TColor = "Green" | "Black" | "Blue" | "Yellow" | "Gris";


interface IColor {
    color: "Green" | "Black" | "Blue" | "Yellow" | "Gris";
};

interface IDiv extends IColor {
    size: number;
}

const o: IDiv = { size: 10, color: "Green" }

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

    const fn = <T,>(variable: T): T => {
        return variable;
    }

    const result1: number = fn(1);
    const result2: string = fn("Mahdi");

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
                <p>Genirique: {result1} - {result2}</p>
            </div>

            <button onClick={onClick}>Click me to display a console log</button>
            <button onClick={handleIncrement}>Increment Counter: {state}</button>
        </div>
    );
}

export default TypescripTest;
