import './App.css';
import Header from './components/Header/Header';
import './bootstrap.min.css';
import { useState } from 'react';
import QuickSort from './components/QuickSort/QuickSort';
import InsertionSort from './components/InsertionSort/InsertionSort';
import ArrayInput from './components/ArrayInput/ArrayInput';
import MergeSort from './components/MergeSort/MergeSort';

function App() {

  // const [methodChoice, setMethodChoice] = useState(0);
  const [unsortedArray, setUnsortedArray] = useState([]);

  return (
    <div className="App">
      <Header />
      {/* <QuickSort /> */}
      <ArrayInput setUnsortedArray={setUnsortedArray} />
      <InsertionSort unsortedArray={unsortedArray} />
      <MergeSort unsortedArray={unsortedArray}/>
    </div>
  );
}

export default App;
