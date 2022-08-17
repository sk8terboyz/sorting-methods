import $ from "jquery";
import './ArrayInput.css';

const ArrayInput = ({setUnsortedArray}) => {

    const submitHanlder = () => {
        let input = $("#arrayValues")[0].value;

        if(input) {
            let filtered = splitInputs(input);
            setUnsortedArray(filtered);
            // always make sure proper values are in even after failed attempts
            $("#verification")[0].innerHTML = "✔ Uploaded ✔";
            $("#verification")[0].classList.remove("hidden");
            $("#verification")[0].style.color = "rgb(11, 199, 11)";
            return;
        }
        // failed attempts
        $("#verification")[0].innerHTML = "No values submitted";
        $("#verification")[0].classList.remove("hidden");
        $("#verification")[0].style.color = "red";
        
    }

    const splitInputs = (arr) => {
        let stringArray = arr.split(" ");
        return stringArray.map(val => {
            return Number(val);
        })
    }

    return (
        <div>
            <h4>Input numbers to be sorted</h4>
            <p>(Separate with spaces)</p>
            <textarea id="arrayValues"/>
            <br />
            <button onClick={submitHanlder}>Upload</button>
            <p id="verification" className="hidden">✔ Uploaded ✔</p>
        </div>
    )
}

export default ArrayInput;