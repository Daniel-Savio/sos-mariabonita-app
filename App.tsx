import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { Home } from "./src/pages/Home";

export default function App() {
  

  return (
    //! Igonre este erro, ele não interfere em nada !//
    <TailwindProvider utilities={utilities}>
      <Home/>
    </TailwindProvider>
  );
}

