// geteElementById - element
const title = document.getElementById("title");
title.innerHTML = "New Title";

// getElementsByTagName - HTMLCollection
const p = document.getElementsByTagName("p")[0];
p.style.backgroundColor = "lightblue";

// getElementsByClassName - HTMLCollection
const pClass = document.getElementsByClassName("p");
for (let i = 0; i < pClass.length; i++) {
  pClass[i].style.color = "red";
}

// querySelector - element
const li = document.querySelector("section#b ul li:nth-child(2)");
li.style.backgroundColor = "yellow";

// querySelectorAll - nodeList
const liAll = document.querySelectorAll("section#b ul li");
liAll.forEach(function (li) {
  li.style.color = "blue";
});
