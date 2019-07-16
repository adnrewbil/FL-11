// Task 0
function getNumbers(arg) {
  let newstr = arg.replace(/[a-zA-Z]+/g, '');
  return newstr.split('');
}

// Task 1
function findTypes(...arg) {

  let types = new Map();

  for (let i = 0; i < arg.length; i++) {
    let current = typeof arg[i];
    if (types.get(current) === undefined) {
      types.set(current, 1);
    } else {
      types.set(current, types.get(current) + 1);
    }
  }
  return types;
}

// Task 2
function executeforEach(arr, myFunc) {
  for (let i = 0; i < arr.length; i++) {
    myFunc(arr[i]);
  }
}

// Task 3 
function mapArray(arr, myFunc) {
  let result = [];
  executeforEach(arr, function (item) {
    result.push(myFunc(item));
  });
  return result;
}

//Task 4
function filterArray(arr, myFunc) {
  let result = [];
  executeforEach(arr, function (item) {
    if (myFunc(item)) {
      result.push(item);
    }
  })
  return result;
}

//Task 5
function showFormattedDate(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return 'Date: ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}

//Task 6
function canConvertToDate(date) {
  let d = new Date(date);
  return !isNaN(d.getTime());
}

//Task 7 
function daysBetween(date1, date2) {
  let ms = 1000;
  let s = 60;
  let h = 60;
  let d = 24;

  let timeDiff = date1.getTime() - date2.getTime();
  let dayMillis = d * h * s * ms;
  return Math.round(timeDiff / dayMillis);
}

//Task 8
function getAmountOfAdultPeople(ppl) {
  let adult = 18;
  let today = new Date();
  let adultBdayMin = new Date(today.setFullYear(today.getFullYear() - adult));
  let qty = filterArray(ppl, function (el) {
    let bday = new Date(el[' birthday ']);
    return daysBetween(adultBdayMin, bday) > 0;
  });
  return qty.length;
}

//Task 9
function getValues(x) {
  let key;
  let result = [];
  let myMap = {
    'keyOne': 1,
    'keyTwo': 2,
    'keyThree': 3
  };
  if (x.hasOwnProperty(key)) {
    result.push(myMap[key]);
  }
  return result;
}

//Task 10 
function keys(x) {
  let key;
  let result = [];
  if (x.hasOwnProperty(key)) {
    result.push(key);
  }
  return result;
}