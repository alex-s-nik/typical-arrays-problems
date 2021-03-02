
exports.min = function min (array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  let m =array[0]
  for (let i = 0; i<array.length; i++){
    m = Math.min(array[i], m);
  }
  return m;
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  let m =array[0]
  for (let i = 0; i<array.length; i++){
    m = Math.max(array[i], m);
  }
  return m;
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  let sum = 0;
  for (let i=0; i<array.length; i++){
    sum += array[i];
  }
  return sum / array.length;
}
