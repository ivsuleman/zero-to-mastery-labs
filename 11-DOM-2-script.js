var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li"); //array
var deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {

	var buttonDelete = document.createElement("button")
	buttonDelete.innerText = "delete";
	buttonDelete.onclick = removeItem;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(buttonDelete);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleItem(event) {
	event.target.classList.toggle("done");
}

function addDeleteButton() {
	li.forEach(item => {
		var buttonDelete = document.createElement("button")
		buttonDelete.innerText = "delete";
		buttonDelete.onclick = removeItem;
		item.appendChild(buttonDelete);
	});
}

function removeItem(event) {
	event.target.parentNode.remove();
}

buttonEnter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleItem);
addDeleteButton();