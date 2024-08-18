const getCanvas = document.getElementsByClassName("newCanvas")[0];
const storeRandom = Math.round(Math.random() * 255);
const getButton = document.getElementsByClassName("button")[0];
const getButton2 = document.getElementsByClassName("button")[1];
getButton.addEventListener("click", changeColor);
getButton2.addEventListener("click", displayValue);
color1 = `rgb(${Math.round(Math.random() * 320)},${Math.round(
  Math.random() * 320
)},${Math.round(Math.random() * 320)})`;
color2 = `rgb(${storeRandom},${storeRandom},${storeRandom})`;
const canvasDraw = getCanvas.getContext("2d");
color = "white";

let k = 0;
let l = 0;
let m = 0;
let n = 0;
for (let i = 0; i < 14; i++) {
  m = 0;
  for (let j = 0; j < 28; j++) {
    k = 0;
    k = j * 10;
    k = k + l;
    m = i * 10;
    m = m + n;
    l++;
    console.log(l);
    canvasDraw.fillStyle = color1;
    canvasDraw.fillRect(k, m, 8, 8);
  }
  l = 0;
  n++;
}
function reload() {
  location.reload();
}
function changeColor() {
  reload();
}
function displayValue() {
  for (let i = 0; i <= 110; i += 11) {
    canvasDraw.fillStyle = "black";
    canvasDraw.fillRect(176, i, 8, 8);
    if (i == 0 || i == 11 || i == 22 || i == 33) {
    } else {
      canvasDraw.fillStyle = "black";
      canvasDraw.fillRect(121, i, 8, 8);
    }
    if (i == 110) {
      for (let k = 187; k <= 242; k += 11) {
        canvasDraw.fillStyle = "black";
        canvasDraw.fillRect(k, i, 8, 8);
      }
    }
    if (i >= 55 && i <= 110) {
      canvasDraw.fillStyle = "black";
      canvasDraw.fillRect(i, 110, 8, 8);
    }
    if (i == 55) {
      canvasDraw.fillStyle = "black";
      canvasDraw.fillRect(55, 121, 8, 8);
      canvasDraw.fillStyle = "black";
      canvasDraw.fillRect(55, 133, 8, 8);
    }
  }

  for (let j = 55; j < 242; j += 11) {
    canvasDraw.fillStyle = "black";
    canvasDraw.fillRect(j, 143, 8, 8);
  }

  for (let j = 121; j <= 176; j += 11) {
    canvasDraw.fillStyle = "black";
    canvasDraw.fillRect(j, 0, 8, 8);
  }

  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(242, 121, 8, 8);
  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(242, 132, 8, 8);
  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(242, 143, 8, 8);

  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(88, 33, 8, 8);
  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(99, 22, 8, 8);
  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(110, 11, 8, 8);

  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(99, 33, 8, 8);
  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(110, 33, 8, 8);
  canvasDraw.fillStyle = "black";
  canvasDraw.fillRect(121, 33, 8, 8);

  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 0, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(132, 0, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(143, 0, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(154, 0, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(165, 0, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 0, 8, 8);

  //solves the below lengthy code

  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 44, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 55, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 66, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 77, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 88, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 99, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 110, 8, 8);

  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 0, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 11, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 22, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 33, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 44, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 55, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 66, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 77, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 88, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 99, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 110, 8, 8);

  // canvasDraw.fillStyle = "blue";
  // canvasDraw.fillRect(198, 110, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(209, 110, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(220, 110, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(231, 110, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(242, 110, 8, 8);

  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(55, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(66, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(77, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(88, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(99, 143, 8, 8);
  // canvasDraw.fillStyle = "blue";
  // canvasDraw.fillRect(110, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(121, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(132, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(143, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(154, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(165, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(176, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(187, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(198, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(209, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(220, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(231, 143, 8, 8);
  // canvasDraw.fillStyle = "black";
  // canvasDraw.fillRect(242, 143, 8, 8);
}

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(10, 10, 10, 10);

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(20, 20, 10, 10);

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(30, 30, 10, 10);

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(30, 10, 10, 10);

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(10, 30, 10, 10);

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(10, 10, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(50, 10, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(70, 10, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(60, 20, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(50, 30, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(70, 30, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(90, 10, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(110, 10, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(100, 20, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(90, 30, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(110, 30, 10, 10);

// canvasDraw.fillStyle = color2;
// canvasDraw.fillRect(10, 10, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(50, 10, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(70, 10, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(60, 20, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(50, 30, 10, 10);

// canvasDraw.fillStyle = color;
// canvasDraw.fillRect(70, 30, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(90, 10, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(110, 10, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(100, 20, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(90, 30, 10, 10);

// canvasDraw.fillStyle = `rgb(${Math.round(Math.random() * 255)},${Math.round(
//   Math.random() * 255
// )},${Math.round(Math.random() * 255)})`;
// canvasDraw.fillRect(110, 30, 10, 10);

