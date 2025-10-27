function Add() {
  var input = document.getElementById("1");
  var list = document.getElementById("2");
  if (input.value === "") {
    console.log("enter Task")
    alert("enter Task")
   return;
  }
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
}
function Delete() {
  var list = document.getElementById("2");

  if (list.innerHTML === "") {
    alert("No task to delete!");
    return;
  }
  list.innerHTML = "";
 console.log("All tasks deleted!");
}


