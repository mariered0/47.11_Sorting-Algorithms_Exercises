function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    //push remaining elements in either exhausted array
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    //base case
    if(arr.length <= 1) return arr;
    //typical case
    //split the arr
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    //splice mid to the end
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};