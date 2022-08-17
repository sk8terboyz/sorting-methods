import $ from "jquery";


const QuickSort = () => {
    let numArray = [1, 9, 25, 4, 54, 6, 2, 34, 20, 18];
    
    // utility function to swap two elements
    const swap = async (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const partition = async (arr, low, high) => {
        let pivot = arr[high];

        let i = (low - 1);

        // pivot is placed in its correct position
        for(let j = low; j <= high - 1; j++) {
            if(arr[j] < pivot) {
                i++;
                await swap(arr, i, j);
            }
        }
        await swap(arr, i + 1, high);
        return (i + 1)
    }

    const sort = async (arr, low, high) => {
        if(low < high) {
            // partioning index
            let pi = await partition(arr, low, high);

            sort(arr, low, pi-1);
            sort(arr, pi+1, high);
        }
    }

    const startSort = async () => {
        let sorted = await sort(numArray, 0, numArray.length - 1);
        await printArray(sorted);
    }
    
    const printArray = async (arr) => {
        console.log(arr);
        arr.forEach(val => {
            let li = document.createElement('li');
            li.value = val;
            $('#sorted')[0].appendChild(li);
        });

    }


    return (
        <div>
            <button onClick={startSort}>Sort</button>
            <h3>Sorted:</h3>
            <ul id="sorted"></ul>
        </div>
    )
}

export default QuickSort