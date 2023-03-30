let result = document.getElementById("screen");
let equal = document.getElementById("numEqual");
let clear = document.getElementById("numC");

// Add event listener to the numbers
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");
let numDot = document.getElementById("numDot");

// Add event listener to the operators
let plus = document.getElementById("numPlus");
let minus = document.getElementById("numMinus");
let multiply = document.getElementById("numMultiply");
let divide = document.getElementById("numDivide");
let percent = document.getElementById("numPercent");
let squareRoot = document.getElementById("numSquareRoot");

// Add event listener to the clear button
clear.onclick = function() {
  result.textContent = "0";
};

// Add event listener to the equal button
equal.onclick = function() {
  result.textContent = eval(result.textContent);
};

// Add event listener to the numbers
num1.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "1";
  } else {
    result.textContent += "1";
  }
};
num2.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "2";
  } else {
    result.textContent += "2";
  }
};
num3.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "3";
  } else {
    result.textContent += "3";
  }
};
num4.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "4";
  } else {
    result.textContent += "4";
  }
};
num5.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "5";
  } else {
    result.textContent += "5";
  }
};
num6.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "6";
  } else {
    result.textContent += "6";
  }
};
num7.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "7";
  } else {
    result.textContent += "7";
  }
};
num8.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "8";
  } else {
    result.textContent += "8";
  }
};
num9.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "9";
  } else {
    result.textContent += "9";
  }
};
num0.onclick = function() {
  if (result.textContent == "0") {
    result.textContent = "0";
  } else {
    result.textContent += "0";
  }
};
numDot.onclick = function() {
  if (result.textContent.indexOf(".") == -1) {
    result.textContent += ".";
  }
};

// Add event listener to the operators
plus.onclick = function() {
  result.textContent += "+";
};
minus.onclick = function() {
  result.textContent += "-";
};
multiply.onclick = function() {
  result.textContent += "*";
};
divide.onclick = function() {
  result.textContent += "/";
};
percent.onclick = function() {
  result.textContent = eval(result.textContent) / 100;
};
squareRoot.onclick = function() {
  result.textContent = Math.sqrt(eval(result.textContent));
};