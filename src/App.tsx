import React, { useState } from 'react';
import './App.css';
import TypescripTest from './TypescripTest';

interface IUser {
  name: string;
  age: number;
  country: string;
  numbers: number[];
}

const App: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const [user, setUser] = useState<IUser | null>(null);
  const name = user?.name

  const fun = <T,>(value: T): T => {
    return value;
  }

  return (
    <div className="App">
      <TypescripTest
        name="EL MAHDI HAKMOUNE"
        age={33}
        email="mehdi.hakmoune@gmail.com"
        color='Green'
        background="Black"
        padding={[10, 22, 58, 34]}
        state={count}
        setState={setCount}
        onClick={() => console.log("Hello World!")}
      >
        Typescript ! I'm a children...
      </TypescripTest>
    </div>
  );
}

export default App;
