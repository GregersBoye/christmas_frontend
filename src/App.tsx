import React, {useEffect, useState} from "react";
import Container from '@material-ui/core/Container'
import PinList from './components/pinList';

const App = () => {
    const [allowedStates, setAllowedStates] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const response = await fetch('http://raspberrypi.local:1224/getModes')
            const jsonResponse = await response.json();
            setAllowedStates(jsonResponse);
            setLoading(false);
        }
        loadData();
        }, []);
    return (
        <div className="App">
            <header>
                <h1>Christmas-light controller</h1>
            </header>
            <section>
                <Container maxWidth="sm">

                    {!loading && <PinList ></PinList>}
                    {loading && <h1>Loading</h1>}
                </Container>
            </section>

        </div>
    );
}

export default App;
