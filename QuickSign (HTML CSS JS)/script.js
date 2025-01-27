const colorPicker = document.getElementById("text-color");
const canvasColr = document.getElementById("bg-color");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const clearBtn = document.getElementById("clear");
const saveBtn = document.getElementById("save");
const fontSize = document.getElementById("font-size");
const retrieveBtn = document.getElementById("retrieve");

colorPicker.addEventListener("change", (e) => {
  ctx.fillStyle = e.target.value;
  ctx.strokeStyle = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

canvasColr.addEventListener("change", (e) => {
  ctx.fillStyle = e.target.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

fontSize.addEventListener("change", (e) => {
  ctx.lineWidth = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("canvasContents", canvas.toDataURL());

  let link = document.createElement("a");
  link.download = "my-signature.png";
  link.href = canvas.toDataURL();
  link.click();
});

retrieveBtn.addEventListener("click", () => {
  let savedCanvas = localStorage.getItem("canvasContents");
  if (savedCanvas) {
    let img = new Image();
    img.src = savedCanvas;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }
});

let container = document.getElementsByClassName("container")[0];

let button = document.createElement("button");
button.textContent = "Click Me";
container.appendChild(button);
