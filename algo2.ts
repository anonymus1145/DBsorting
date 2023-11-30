//Merge-sort

function mergeSort(arr: number[]): number[] {
   if (arr.length <= 1) {
       return arr;
   }

   let mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);

   const sortedLeft = mergeSort(left);
   const sortedRight = mergeSort(right);
    
   return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const merged: number[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}

const arr = [5, 2, 8, 3, 1];
const sortedArr = mergeSort(arr);
console.log(sortedArr);