//Challenges in the array section
// Complete the rotLeft function below.
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
      // remove first element
      let first = a.shift();
      // push into array
      a.push(first);
  }
  return a;
}

// minnimum brides
// bubble sort
// Complete the minimumBribes function below.
function minimumBribes(q) {
  // check whether the result is too chaotic
  let swaps = 0;
  let swapped = false;
  for (let i = 0; i < q.length; i++) {
      if (q[i] - (i + 1) > 2 ) {
        return "Too chaotic";
      }
  }
  // user bubble sort to track number of swaps
  // if left is greater than right swap
  // if swap occurs sort again
  do{
    swapped = false;
    q.forEach((num, i) =>{
      if (num > q[i + 1]) {
        [q[i], q[i + 1]] = [q[i + 1 ], num];
        swaps++;
        swapped = true;
      }
    })
  }while(swapped){
    return swaps;
  }
}

// loop through array and swap minVal
// Keep track of sorted and unsorted
// so sort look ahead etc
function minimumSwaps(arr) {
  let swapped = 0;
  arr.forEach((val, index) => {
      let minValue = val;
      let minIndex = index;
      for (let i = index; i < arr.length; i++) {
          if (arr[i] < minValue) {
              minValue = arr[i];
              minIndex = i;
          }
      }
      if (arr[index] !== arr[minIndex]) {
          let num = arr[index];
          [arr[index], arr[minIndex]] = [arr[minIndex], num];
          swapped++;
      }
  })
  return swapped;
}

// quick sort uses the pivot to split and sort smaller sections
// left is less or equal to pivot, right is more
function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr.pop();
      const length = arr.length;
      let left = [];
      let right = [];

      for (var i = 0; i < length; i++) {
        if (arr[i] <= pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      return [...quickSort(left), pivot, ...quickSort(right)];
    }
  }

// graph theory tree
// how many cycles - 1
function minimumSwaps(arr) {
  let counter = 0;
  arr.unshift(0);
  let length = arr.length;
  let checked = new Array(length).fill(false);
  let arrayDict = [];
  arr.forEach((value, index) => {
      return arrayDict[index] = value;
  });
  arrayDict.forEach((value, index) => {
      if (checked[value] || value === index) {
          return;
      }
      let cycle = 0;
      while (!checked[value]) {
          checked[value] = true;
          value = arrayDict[value];
          cycle++;
      }
      counter +=  cycle - 1;
  })
  return counter;
}