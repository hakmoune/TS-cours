# Ressource
https://www.youtube.com/watch?v=TPACABQTHvM&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=36&t=3s

https://www.youtube.com/watch?v=ffCIANfx_-0&list=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3

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
    const MyComponent: `React.FC`<MyComponentProps> = ({ name, age, isStudent }): `JSX.Element` => {
    return (
        <div>
        <h1>Hello, {name}!</h1>
        <p>Age: {age}</p>
        <p>{isStudent ? 'Student' : 'Not a student'}</p>
        </div>
    );
    };

    export default MyComponent;


3. Type of a component `const MyComponent: React.FC` son retourn est `JSX.Element`
    import React from 'react';

    const MyComponent: React.FC = (): JSX.Element => {
        return <div>This component doesn't take any props!</div>;
    };


4. Children has the type => `children: React.ReactNode`

5. JSX Type: `const title: JSX.Element = <h2>I'm a JSX element</h2>;`

6. Type of a button: `type: "submit" | "reset" | "button"`

7. "Extends" and "&": 
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

        interface IDiv extends IColor {
            size: number;
        };

        const o: IDiv = { color: "Green", size: 10 }

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

10. `Array` Type: `interface Itable {numbers: number[];}` | `const arr: string[] = ["Banana", "Orange", "Apple"]`

11. `Array` that contains elements of different types is typically represented as a tuple. A tuple is an array where each element has a specific known type. In your example: `const myTuple: [string, number, string] = ["Banana", 22, "Apple"];` // un tuple c'est yn tableau de taille fixe

Ou nous pouvons utiliser dans ce cas: `const arr3: (string | number)[] = ["Banana", 22, "Apple"]`

13. `Object`: 
    `const obj: { name: string, age: number } = { name: "mehdi", age: 12 }`
    
    //Pour un objet string dynamique
    `const obj2: { [key: string]: string } = { name: "mehdi", lastname: "hakmoune" }`

    //Les objets de type specifique
    `const date: Date = new Date();`

12. To create a reusibale types, we create a `folder "lib"` => a `file "types.ts"` => and use `export/import` 
`import { type Color } from "./lib/types";` // type just to clarify it's a TS type

13. the `@` symbol is often configured as an alias for the project's `src` directory. you can config this in your `webpack` or `tsconfig.json`

14. `e`: c'est de type Event `(e:Event){...}` 

15. Les type ce sont des Alias ni plus ni moin: 
    `type TUser = {username: string, lastname: string}`

16. Les interface c'est une option pour faire le type pour les objets, aussi les interface sont ouvert pour l'ajout d'autre key, TS fait le merge 
    `interface IUser {username: string, lastname: string}`
    `interface IUser {age: 12}`

    TS va merger les deux interface, et nous aurons un interface avec username, lastname, age
    Contrairement au type, dans ce cas la, TS va nous generer une erreur, et nous dis que le type et deja definie
    Aussi les interface peuvent etre hériter par des class

17. `Any VS Unknow`
    Any perd le type apres l'utilisation, toujours any
    Unknow prend le type de l'utilisation, apres l'utilisation il prend le type utilisé

18. `Enum`: pour stocker des données, ce sont des constants avec des valeur a utiliser, comme par exmple les type d'action sur Ridux
    Ex1: const enum STEPS {
            Intro,
            Selection,
            Panier,
            Paiement
        }

    Ex2: const enum STEPS {
            Intro = "PRODUCT_PAGE",
            Selection = "ATC",
            Panier = "ATC_PAGE",
            Paiement = "CHECKOUT"
        }