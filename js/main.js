const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

document.getElementById('skill-list').innerHTML = '';

btn.addEventListener("click", (e) => {
  const li = document.createElement("li");
  console.log(input.value);
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", (e) => {
  const link = e.target;
  console.log(link);
  link.parentNode.removeChild(link);
});
