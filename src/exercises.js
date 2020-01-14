 function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  let alength = a.length;
  let blength = b.length;

  // [ 1, 2, 3, 4, 5 ]
  // length: 5
  // indexes: 0, 1, 2, 3, 4
  if (a[0] == b[0] || a[alength-1] == b[blength-1]) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  if (!values || values.length == 0 || !n || n >=0 || n > 5) {
    return false;
  }
  let placeholderup = 0;
  let newvalue = 0;
  let newvalues = [];
  let placeholderdown = values.length-2-n
{
  while(placeholderup<n-1)
  {
    values[placeholderup]=newvalue;
    newvalues.push(newvalue);
    placeholderup++;
  }
  while(placeholderdown<5)
  {
    values[placeholderdown]=newvalue
    newvalues.push(newvalue);
    placeholderdown++
  }
return newvalues
}
  // [ 1, 2, 3, 4, 5 ]
  // 5
  // [ 1, 2, 3, 3, 4, 5 ]
}

function difference(numbers) {
  if (!numbers||numbers.length==0) {
    
  }

}
function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
