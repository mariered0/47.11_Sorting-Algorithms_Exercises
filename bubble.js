function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

//Springboard solution
// function bubbleSort(arr){
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], [arr[idx1]]];
//     };

//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }


module.exports = bubbleSort;