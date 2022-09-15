// to bind enter key to the add button

$(document).keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("addButton").click();
  }
});
var arr = [];

// to add new item to the list
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  var input = document.getElementById("input");
  var container = document.getElementById("container");
  var item = document.createElement("li");
  arr.push(input.value);

  item.classList.add("item");
  var item_input = document.createElement("input");
  item_input.classList.add("item_input");
  item_input.classList.add("disabled");
  item_input.value = input.value;
  var editButton = document.createElement("button");
  editButton.addEventListener("click", editFunction);
  editButton.classList.add("editButton");
  editButton.innerHTML = "EDIT";
  // var edit_clk = editButton.appendChild(document.createTextNode("EDIT"));

  var removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.addEventListener("click", removeItem);
  removeButton.appendChild(document.createTextNode("REMOVE"));

  arr.map((item1) => {
    return (
      item.appendChild(item_input),
      item.appendChild(editButton),
      item.appendChild(removeButton),
      container.appendChild(item),
      (input.value = ""),
      console.log(item1, arr.length)
    );
  });
});

//delete button
var removeButton1 = document.getElementsByClassName("removeButton");
function removeItem() {
  var item = this.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

//edit button
var editButton1 = document.getElementsByClassName("editButton");
function editFunction() {
  var item = this.parentNode;
  var item_input = item.querySelector(".item_input");
  item_input.classList.toggle("disabled");
  item_input.focus();
  if (editButton1.innerHTML === "EDIT") {
    console.log("edit");
  }
}
/*function editClicked() {
  console.log("Edit Button is Clicked");
  const elemClass = document.getElementsByClassName("container");
  elemClass[0].classList.appendChild("item1");
  console.log("class added");
}*/
