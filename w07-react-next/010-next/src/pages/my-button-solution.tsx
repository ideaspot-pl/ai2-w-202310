import {Main} from "next/document";
import {ReactElement, useState} from "react";

export default function MyButtonPageSolution() {
  const [globalCounter, setGlobalCounter] = useState(0);

  return (
    <main>
      <MyButton globalCounter={globalCounter} setGlobalCounter={setGlobalCounter} />
      <MyButton globalCounter={globalCounter} setGlobalCounter={setGlobalCounter} />
      <MyButton globalCounter={globalCounter} setGlobalCounter={setGlobalCounter} />

      <div>Global counter: {globalCounter}</div>
    </main>
  );
}

export function MyButton({globalCounter, setGlobalCounter}: {
  globalCounter: number,
  setGlobalCounter: (counter: number) => void
}): ReactElement {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
    setGlobalCounter(globalCounter+1);
  }

  return (
    <div>
      <button
        // onClick={() => setCounter(counter+1)}
        onClick={handleClick}
      >
        Click me!
      </button>
      <div>Clicked {counter} times!</div>
    </div>
  );
}
