import { useState } from "react";
import "./styles/global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="font-bold text-2xl text-violet-500">
        HELLO WORLD MARCELO
      </h1>
      <button className="bg-violet-500 font-medium px-4 py-2 rounded hover:bg-violet-900">
        APERTAR
      </button>
    </div>
  );
}
