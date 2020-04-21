import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(<App />, document.getElementById("root"));


function nextSmaller(n) {
    let arr = ('' + n).split('').reverse();
    if(('' + n).replace(/^(.)0+/,'$1')==('' + n).replace(/^(.)0+/,'$1').split('').sort().join('')) return -1;
    console.log(n);
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] < arr[j] ) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                console.log(arr.slice(i+1,j).sort())
                return +((arr.slice(0,j).sort().concat(arr.slice(j)).reverse().join('')))
            }
        }
    }
    return +arr.reverse().join('');
}