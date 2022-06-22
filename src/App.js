import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./Action";
function App() {
  const counter = useSelector((state) => state.Counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>
      {isLogged && <h3>Valuable information should not seen</h3>}
    </div>
  );
}

export default App;
