import $ from "jquery";
import './InsertionSort.css';

const InsertionSort = ({unsortedArray}) => {
    const arr = unsortedArray;

    const sort = () => {
        if(arr.length > 0) {
            const size = arr.length;
    
            for(let step = 1; step < size; step++) {
                let key = arr[step];
                let j = step - 1;
    
                // compare key with each element on the left until a smaller element is found
                while(j >= 0 && key < arr[j]) {
                    arr[j + 1] = arr[j];
                    --j;
                }
                // Place key at after the smaller element
                arr[j + 1] = key;
                setInfo(arr);
            }
            return;
        }
        $("#sorted")[0].innerHTML = "You need to add values first";
    }
    
    const setInfo = (arr) => {
        let output = $("#sorted")[0];
        output.innerHTML = `<strong>Sorted:</strong> [${[...arr]}] <hr /> <h5>Insertion Sort Complexity</h5> <p><strong>Time Complexity:</strong></p> <p>Best: O(n)</p> <p>Worst: O(n<sup>2</sup>)</p> <p>Average: O(n<sup>2</sup>)</p> <p><strong>Space Complexity:</strong> O(1)</p>`;
    }

    return (
        <div className="insertionSort">
            <button onClick={sort}>Insertion Sort</button>
            <p id="sorted"></p>
        </div>
    )
}

export default InsertionSort;