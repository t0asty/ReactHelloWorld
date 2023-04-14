import "./styles.css";

function HelloWorld() {
  return <div>Hello this World</div>;
}

function Card(props: any) {
  const label = props.label;
  return <div className="Card">{label}</div>;
}

function Field(props: any) {
  return (
    <div className="Field">
      <h1>Memory</h1>
      <div className="CardHolder">{props.arr}</div>
    </div>
  );
}

export default function App() {
  const arr = Array(8)
    .fill(0)
    .map((_, i) => i + 1)
    .map((num) => <Card label={`Card ${num}`} />);
  return (
    <div className="App">
      <h1>A game of</h1>
      <Field arr={arr} />
    </div>
  );
}
