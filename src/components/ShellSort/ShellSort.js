import $ from 'jquery';
import "./ShellSort.css"
const ShellSort = ({ unsortedArray }) => {
    
    const sort = (arr) => {
        let n = arr.length;
        // start with a big gap, then reduce the gap
        for(let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
            // Do a gapped insertion sort for this gap size. The first gap element a[0...gap-1] are already in gapped order 
            // keep adding one more element until the entire array is gap sorted
            for(let i = gap; i < n; i++) {
                // add a[i] to the elements that have been gap sorted 
                // save a[i] in temp and make a hole at position i
                let temp = arr[i];
                // shift earlier gap-sorted element up until the correct location for a[i] is found
                let j;
                for(j=i; j >= gap && arr[j-gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                // put temp (the original a[i]) in its correct location
                arr[j] = temp;
            }
        }
        return arr;
    }

    const start = () => {
        let arr = sort(unsortedArray);
        setInfo(arr);
    }

    const setInfo = (arr) => {
        let output = $("#sortedS")[0];
        output.innerHTML = `<strong>Sorted:</strong> [${[...arr]}] <hr /> <h5>Shell Sort Complexity</h5> <p><strong>Time Complexity:</strong></p> <p>Best: O(nlog(n))</p> <p>Worst: O(n<sup>2</sup>)</p> <p>Average: O(nlog(n))</p> <p><strong>Space Complexity:</strong> O(1)</p>`;
    }

    return (
        <div>
            <button onClick={start}>Shell Sort</button>
            <p id="sortedS"></p>
        </div>
    )
}

export default ShellSort;