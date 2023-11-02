function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  const avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: parseFloat(avg) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr == "") {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr == "") {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  const difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr == "") {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  const sumDifference = sumEvenElement - sumOddElement;
  return sumDifference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr == "") {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result;
  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
