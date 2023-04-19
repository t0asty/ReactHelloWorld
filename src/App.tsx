import { useState } from "react";
import "./styles.css";

function HelloWorld() {
  return <div>Hello this World</div>;
}

function Card(props: any) {
  const label = props.shown ? props.label : "";
  return (
    <div className="Card" onClick={props.onClick}>
      {label}
    </div>
  );
}

function Field(props: any) {
  const [shown, setShown] = useState<boolean[]>(Array(8).fill(false));

  function handleClick(i: number) {
    function toggleShown(previous: boolean[]) {
      const arr = [...previous];
      arr[i] = !arr[i];
      return arr;
    }
    setShown(toggleShown);
  }

  const arr = Array(8)
    .fill(0)
    .map((_, i) => i + 1)
    .map((num) => (
      <Card
        label={`Card ${num}`}
        shown={shown[num - 1]}
        key={num}
        onClick={() => handleClick(num - 1)}
      />
    ));

  return (
    <div className="Field">
      <h1>Memory</h1>
      <div className="CardHolder">{arr}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>A game of</h1>
      <Field />
    </div>
  );
}
