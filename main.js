function addButton() {
  console.log("Add Button is Clicked");
  const elemClass = document.getElementsByClassName("container");
  console.log(elemClass);
  elemClass[0].classList.add("item1, item_input");
  console.log("class added");
}

function removeClicked() {
  console.log("Remove Button is Clicked");
  const elemClass = document.getElementsByClassName("container");
  console.log(elemClass);
  elemClass[0].classList.remove("item1");
  console.log("class removed");
}
function editClicked() {
  console.log("Edit Button Clicked");
  const elemClass = document.getElementsByClassName("container");
  elemClass[0].innerHTML =
    '<input type="text" class="item_input" value="Sport" /><button class="editButton" onclick="editClicked()">Edit</button><button class="removeButton" onclick="removeClicked()">Remove</button>';
}
