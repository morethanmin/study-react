import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
