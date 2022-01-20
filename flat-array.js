function flatArray(arr) {
  let flatArr = [];
  for(ar in arr) {
    if(Array.isArray(arr[ar])) {
      flatArr = [...flatArr, ...flatArray(arr[ar])];
    } else {
      flatArr.push(arr[ar]);
    }
  }
  return flatArr;
}

const arr = [1, [2], [[3]], [[[5]]], 'hello'];

flatArray(arr)  // [1, 2, 3, 5, 'hello']
