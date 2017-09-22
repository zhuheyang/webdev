var checklist = document.getElementById('checklist');

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");


for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	// console.log("my current value is ", input.value.length);
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	// console.log("we blurred!", this.value);
	// console.log(this);
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress() {
	// console.log(event);
	// console.log(event.key);
	// console.log(event.which);
	if(event.which === 13) {
		updateItem.call(this);
	}
}
