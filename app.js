let input = document.querySelector("#search");
let listContainer = document.querySelector(".list-container");
let target = document.getElementById("one");

function sendData() {
  if (input.value === "") {
    target.style.border = "2px solid red";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    target.style.border = "";
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    input.value = "";
    saveData();
    console.log(li);
  }
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
