import { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Fudanik</h1>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
