import $ from 'jquery';
import "./MergeSort.css"
const MergeSort = ({unsortedArray}) => {

    const merge = (arr, p, q, r) => {

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
        
        // undefined/extra value gets added in this while loop
        while(i < n1 && j < n2) {
            if(L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                if(R[j]){
                    arr[k] = R[j];
                }
                console.log(R[j]);
                j++;
            }
            k++;
        }
        console.log(arr);
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

    const sort = (arr = [], left = 0, right = 0) => {
        if(arr) {
            if(left >= right) {
                return; // returns recursively
            }
                // m is the point where the array is divided into two subarrays
            let m = left + parseInt((right-left)/2);

            sort(arr, left, m);
            sort(arr, m + 1, right);

            // Merge sorted arrays
            merge(arr, left, m, right);
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
        console.log(arr);
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