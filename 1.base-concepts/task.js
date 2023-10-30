"use strict";
// jshint esversion:7

function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    arr = [];
  }

  if (D == 0) {
    x = -b / (2 * a);
    arr.push(x);
  }

  if (D > 0) {
    x = (-b + Math.sqrt(D)) / (2 * a);
    arr.push(x);
    x = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthPay = S * (P + P / ((1 + P) ** countMonths - 1));
  let sum = monthPay * countMonths;
  return parseFloat(sum.toFixed(2));
}
