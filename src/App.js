import './App.css';
import Header from './components/Header/Header';
import './bootstrap.min.css';
import { useState } from 'react';
import InsertionSort from './components/InsertionSort/InsertionSort';
import ArrayInput from './components/ArrayInput/ArrayInput';
import MergeSort from './components/MergeSort/MergeSort';
import ShellSort from './components/ShellSort/ShellSort';
import { Container, Col, Row } from 'react-bootstrap';

function App() {

  // const [methodChoice, setMethodChoice] = useState(0);
  const [unsortedArray, setUnsortedArray] = useState([]);

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <ArrayInput setUnsortedArray={setUnsortedArray} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <InsertionSort unsortedArray={unsortedArray} />
          </Col>
          <Col>
            <MergeSort unsortedArray={unsortedArray} />
          </Col>
          <Col>
            <ShellSort unsortedArray={unsortedArray} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
