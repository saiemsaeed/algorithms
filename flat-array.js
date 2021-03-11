function flatArray(arr) {
  let flatArr = [];
  for(ar in arr) {
    if(Array.isArray(ar)) {
      flatArr = [...flatArr,...flatArray(ar)];
    } else {
      flatArr.push(ar);
    }
  }
  return flatArr;
}

const arr = [1, [2], [[3]], [[[5]]], 'hello'];

flatArray(arr);
