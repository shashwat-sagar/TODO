const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("editButton");


    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);



    removeButton.addEventListener("click", function () {
      console.log('RemoveButton Clicked');
      let del = document.getElementsByClassName("item");
      console.log(del);
      del[0].remove(itemBox)
      // removeButton.addEventListener("click", () => this.remove(itemBox));

    });
  }
}
new item("TV");
new item("TV");
new item("TV");
new item("TV");
new item("TV");

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}
addButton.addEventListener("click", check);
window.addEventListener("keydown", function (e) {
  if (e.which == 13) {
    check();
  }
});
