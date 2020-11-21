import React, {useEffect, useState} from "react";
import 'mini.css';

const App = () => {
  const [pinStates, setPinStates] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.22:1224/state')
      .then(response => response.json())
      .then(data => setPinStates(data));
  }, [])


  return (
    <div className="App">
      <header >
        <h1>Christmas-light controller</h1>
      </header>

      <section>

      </section>

    </div>
  );
}

export default App;
