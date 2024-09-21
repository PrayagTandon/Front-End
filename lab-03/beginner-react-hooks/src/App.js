import React from "react";
import Counter from "./Counter";
import DataFetching from "./DataFetching";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '32px'
        }}
      >
        React Hooks: useState and useEffect
      </h1>
      {/* COUNTER COMPONENT */}
      <Counter />

      {/* DATAFETCHING COMPONENT */}
      <DataFetching />
    </div>
  );
}

export default App;

/* 

*/