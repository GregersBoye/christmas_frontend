import React, {useEffect, useState} from "react";
import Container from '@material-ui/core/Container'
import PinList from './components/pinList';
import PinModel from "./models/pinModel";
const App = () => {
  const [pinStates, setPinStates] = useState([]);

  useEffect(() => {

  }, [pinStates])

  useEffect(() => {
    fetch('http://192.168.1.22:1224/state')
      .then(response => response.json())
      .then((data) => {
          const newData = data.map((dataPoint:any) => new PinModel(dataPoint));
          setPinStates(newData)
      });
  }, [])


  return (
    <div className="App">
      <header >
        <h1>Christmas-light controller</h1>
      </header>

      <section>
        <Container maxWidth="sm">
           <PinList pins={pinStates} onChange={setPinStates}></PinList>

        </Container>
      </section>

    </div>
  );
}

export default App;
