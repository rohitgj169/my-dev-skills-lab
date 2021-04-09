const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const list = document.querySelector(".content-2");



document.getElementById("skill-list").innerHTML = "";

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  const li = document.createElement("li");
  console.log(input.value);
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
  dltButton(li);
});

const dltButton = (li) => {
  const dlt = document.createElement("button");
  dlt.className = "xbutton";
  dlt.innerHTML = "x";
  li.prepend(dlt);
};

list.addEventListener("click", (e) => {
  e.preventDefault();
  const xButton = e.target;
  console.log(xButton);
  if (xButton.tagName === "BUTTON") {
    const li = xButton.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
});
