import { useState } from "react";
import "./styles/global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="font-bold text-2xl bg-cyan-300 max-w-fit p-5">
        HELLO WORLD MARCELO
      </h1>
      <button className="bg-cyan-300 font-medium px-4 py-2 rounded hover:bg-cyan-500">
        APERTAR
      </button>
    </div>
  );
}
