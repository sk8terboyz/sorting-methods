import $ from 'jquery';
import "./MergeSort.css"
const MergeSort = ({unsortedArray}) => {

    const merge = async (arr, p, q, r) => {

        let n1 = q - p + 1;
        let n2 = r - q;

        let L = new Array(n1);
        let R = new Array(n2);
        
        for( let i = 0; i < n1; i++) {
            L[i] = arr[p + i];
        }
        for( let j = 0; j < n2; j++) {
            R[j] = arr[q + 1 + j];
        }
        
        let i = 0;
        let j = 0;
        let k = p;

        while(i < n1 && j < n2) {
            // An undefined value is added by the R[j] and then gets sorted to the beginning without this extra condition
            if(L[i] <= R[j] || (L[i] && R[j] == null)) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements if they are present
        while(i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while(j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    const sort = async(arr = [], left = 0, right = 0) => {
        if(arr) {
            if(left >= right) {
                return; // returns recursively
            }
                // m is the point where the array is divided into two subarrays
            let m = left + parseInt((right-left)/2);

            await sort(arr, left, m);
            await sort(arr, m + 1, right);

            // Merge sorted arrays
            await merge(arr, left, m, right);
            setInfo(arr);
            return;
        }
        $("#sortedM")[0].innerHTML = "You need to add values first";
    }

    const start = () => {
        let arr = unsortedArray;
        let arrSize = arr.length;
        sort(arr, 0, arrSize);
    }

    const setInfo = (arr) => {
        let output = $("#sortedM")[0];
        output.innerHTML = `<strong>Sorted:</strong> [${[...arr]}] <hr /> <h5>Merge Sort Complexity</h5> <p><strong>Time Complexity:</strong></p> <p>Best: O(nlog(n))</p> <p>Worst: O(nlog(n))</p> <p>Average: O(nlog(n))</p> <p><strong>Space Complexity:</strong> O(n)</p>`;
    }

    return (
        <div>
            <button onClick={start}>Merge Sort</button>
            <p id="sortedM"></p>
        </div>
    )
}

export default MergeSort;