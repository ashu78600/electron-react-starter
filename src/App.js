import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const cpu = api.cpuCount;
    console.log(cpu);
    setCount(cpu);
  }, []);
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <h1>{count}%</h1>
    </div>
  );
}

export default App;
