const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  // document.body.style.backgroundColor = "blue";
  // Untuk body tidak perlu menggambil lagi karena sudah tersedia

  document.body.classList.toggle("biru-muda");
});

const switchColor = document.createElement("button");
const teksButton = document.createTextNode("Swith Color");
switchColor.appendChild(teksButton);
switchColor.setAttribute("type", "button");
btn.after(switchColor);

switchColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const red = document.querySelector("input[name=red] ");
const green = document.querySelector("input[name=green] ");
const blue = document.querySelector("input[name=blue] ");

red.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
green.addEventListener("input", function () {
  const r = green.value;
  const g = green.value;
  const b = blue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
blue.addEventListener("input", function () {
  const r = blue.value;
  const g = blue.value;
  const b = blue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (e) {
  // Posisi mouse
  // console.log(e.clientX);
  // Ukuran browser
  // console.log(window.innerWidth);

  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
