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
  let location=0
let length=0
  let number = 0
  let maxnumber=0
  let minnumber=0
  let difference = 0
  if (!numbers||numbers.length==0) {
    return undefined
  }
  else if (numbers.some(isNaN)){
    return undefined
  }
else
   length = numbers.length-1
{
  while(numbers[location]<length)
  {
    number=numbers[location]
    location+1
    if (number>number[location])
    {maxnumber=number}
  }
  while(numbers[location]<length)
  {
    number=numbers[location]
    location+1
    if (number<number[location])
    {minnumber=number}
  }
  difference=maxnumber-minnumber
  return difference
}
}
function max(number) {
  if (!number || number.length < 3 || number.length % 2 == 0) {
     return undefined;
   }
   if (number.some(isNaN)) {
     return undefined;
   }
  let first_element = number[0]
  let last_element = number[number.length-1]
  let middle_element = number[((number.length/2)-1) + 0.5]
  if ((first_element > last_element) & (first > middle)) {
    return first_element;
  }
  else if ((middle_element > last_element) & (middle_element > first_element)) {
    return middle_element;
  }
else if ((last_element > first_element) & (last_element > middle_element)) {
    return last_element;
  }
  else {
return first_element;
}
}
function middle(values) {
let middlearray=[]
if(!values||values.length<3||values.length%2==0)
{
  return middlearray
}
let lower=0;
let upper=values.length-1;
let middle=(upper/2)+.5
let lowermiddle= middle-1;
let uppermiddle=middle+1;
middlearray.push(values[lowermiddle]);
middlearray.push(values[middle]);
middlearray.push(values[uppermiddle]);
return middlearray;
}
function increasing(numbers) {
  let newarray = numbers;
  if (!neqarray || newarray.length < 3) {
    return false;
  }
  if (newarray.some(isNaN)) {
    return false;
  }
  for (i = 0; i < newarray.length; i++) {
    if (newarray[i] % 1 != 0) {
      return false;
    }
  }
  let counter = 0
  let last = -1
  for (x = 0; x < newarray.length; x++) {
    if (newarray[x] == last + 1) {
      last = newarray[x]
      if (newarray[x+1] == last + 1) {
        return true
        counter = 1
        break;
      }
      else {
      last = -1
    }
      }
    else {
      last = newarray[x]
    }
  }
  if (counter == 0) {
    return false;
  }
}
function everywhere(values, x) {
  if (values == undefined || x === undefined) {
    return false;
  }
  else if (values.length < 1) {
    return false;
  }
  else if (!values.includes(x)) {
    return false;
  }
  else {
    for (let i = values.indexOf(x); i < values.length; i++) {
      if (values[i] === values[i + 1] && values[i + 1] !== undefined) {
        return true;
        break;
      }
      else if (x === 0) {
        return false;
        break;
      }
      else if (values[i] === values[i + 2] && values[i + 2] !== undefined && values[i + 1] !== values[i]) {
        return true;
        break;
      }
        else if (values[i] === values[i + 3] && values[i + 3] !== undefined && (values[i + 1] && values[i + 2]) !== values[i + 3]) {
        return true;
        break;
      }
      else {
        return false;
        break;
      }
    }
  }
}
function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  for (let i = 0; i < numbers.length - 2; i++ ) {
    let consecutive1 = numbers[i];
    let consecutive2 = numbers[i + 1];
    let consecutive3 = numbers[i + 2];
    if (Number.isInteger(consecutive) == false || Number.isInteger(consecutive2) == false || Number.isInteger(consecutive3) == false ) {
      return false;
    }
    if (consecutive1 % 2 == 0 && consecutive2 % 2 == 0 && consecutive3 % 2 == 0) {
      return true;
    }
    else if (consecutive1 % 2 == 1 && conutive2 % 2 == 1 && consecutive3 % 2 == 1) {
      return true;
    }
  }
  return false;
}
function balance(numbers) {
  let add1 = 0
  let add2 = 0
  let placeholer = 0
  if (!numbers || numbers.length < 2) {
    return false;
  }
  for (i = 0; i < numbers.length; i++) {
    if (!(Number.isInteger(numbers[i]))) {
      return false;
    }
  }
  for (z = 0; z < numbers.length; z++) {
    if (numbers[z] == undefined) {
      return true;
    }
  }
  for (x = numbers.length; x > -1; x--) {
    add1 = 0
    add2 = 0
    for(y = numbers.length - x; y > -1; y--) {
      add1 = add1 + numbers[y]
    }
    for(a = numbers.length - 1; a > numbers.length - x; a--) {
      add2 = add2 + numbers[a]
    }
    if (add2 == add1) {
      placeholder = 1
      return true;
    }
  }
  if (placeholder == 0) {
    return false;
  }
}
function clumps(values) {
  if (!values) {
    return -1;
  }
  if (values.length < 2){
    return 0;
  }

  let lastvalue = values[0];
  let now;
  let clump = 0
  let placeholder = 0
  let placeholder2 = 0
  for (x = 1; x < values.length; x++) {
    current = values[x]
    if (lastvalue === now) {
      clump = clump + 1
      for (y = x; y < values.length; y++) {
        lastvalue = now
        now = values[y]
        if (!(lastvalue === now)) {
          placeholder= 1
          x = y
          break;
        }
        else {
          placeholder = -1
        }
      }
    }
    if (placeholder == -1) {
      break;
    }
    lastvalue = now
  }
  return clump;


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
}
};
