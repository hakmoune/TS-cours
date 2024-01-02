# Ressource
https://www.youtube.com/watch?v=TPACABQTHvM&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=36&t=3s
(min 21:41)

# Install cmd
npx create-react-app my-app --template typescript

####

# Notes
1. Type of a function return is not nessesary

2. Propos Type

    import React from 'react';

    // Define the type for your props, We use `interface` because: 
    // `Code Organization`, `Reusability`, `Readability`, `Extensibility(Easy to add more props)`, `Easy for TS to check the type` 
    interface MyComponentProps {
        name: string;
        age: number;
        isStudent: boolean;
    }

    // Create your functional component and specify the type for the props
    const MyComponent: React.FC<MyComponentProps> = ({ name, age, isStudent }): JSX.Element => {
    return (
        <div>
        <h1>Hello, {name}!</h1>
        <p>Age: {age}</p>
        <p>{isStudent ? 'Student' : 'Not a student'}</p>
        </div>
    );
    };

    export default MyComponent;


3. Type of a component `const MyComponent: React.FC` 
    import React from 'react';

    const MyComponent: React.FC = (): JSX.Element => {
        return <div>This component doesn't take any props!</div>;
    };


4. Children has the type => `children: React.ReactNode`

5. JSX Type: `const title: JSX.Element = <h2>I'm a JSX element</h2>;`

6. Type of a button: `type: "submit" | "reset" | "button"`

7. Extends: 
    `Type` we use `&`:
        type TColor = {
            color: "Green" | "Black" | "Blue" | "Yellow" | "Gris";
        };

        type TDiv = TColor & {
            size: number;
        };

    `Interface` we use `extends`:
        interface IColor {
            color: "Green" | "Black" | "Blue" | "Yellow" | "Gris";
        };

        interface IDiv extends TColor {
            size: number;
        };

8. useState type: 
    8.1 `const [count, setCount] = useState<number>(0);`
    "Not neccessary to type the useState"

    8.2 Type useState that hold an object
        interface IUser {
            name: string;
            age: number;
            country: string;
        }

        const [user, setUser] = useState<IUser | null>(null); // Null in the case not fetching data yet

        const name = user?.name // `?` because it could be empty
        const name = user!.name // `!` You teel to TS, yes it can be empty but in this case i'm sure it will have value


9. Generic types:
    const fun = <T,>(value: T): T => {
        return value;
    }

    const resultString: string = fun("Hello, TypeScript!"); // T is inferred as string
    const resultNumber: number = fun(42); // T is inferred as number

It provides flexibility because you can use the same function with different types without explicitly specifying the type each time.

This kind of generic typing is especially useful when you want to write functions or components that work with various data types while maintaining type safety.

10. `Array` Type: `numbers: number[];`

11. To create a reusibale types, we create a `folder "lib"` => a `file "types.ts"` => and use `export/import` 
`import { type Color } from "./lib/types";` // type just to clarify it's a TS type

12. the `@` symbol is often configured as an alias for the project's `src` directory. you can config this in your `webpack` or `tsconfig.json`

Array, enum
