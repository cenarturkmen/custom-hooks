import "./App.css";
import { useInput } from "./hooks/use-input";

function App() {
  const [inputs, handleChange] = useInput({name: "", age: "", email: ""});

  return (
    <div className="App">
      <form>
        <label htmlFor="name">
          Name:{" "}
          <input name="name" value={inputs.name} onChange={handleChange} />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input name="email" value={inputs.email} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default App;
