const p2 = document.getElementsByTagName("p")[1];
p2.addEventListener("mouseenter", function () {
  p2.style.backgroundColor = "lightblue";
});
p2.addEventListener("mouseleave", function () {
  p2.style.backgroundColor = "white";
});

const p4 = document.querySelector("section#b p");
p4.addEventListener("dblclick", function () {
  var i = 4;
  const ul = document.querySelector("section#b ul");
  const newLi = document.createElement("li");
  const newTeksLi = document.createTextNode("li " + i++);
  newLi.appendChild(newTeksLi);
  ul.appendChild(newLi);
});
