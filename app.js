function x() {
  var name = document.querySelector("#name").value;

  if (name.length > 10) {
    alert("The name may have no more than 10 characters");
  } else {
    alert("Good Job !!!!!!!!");
  }
}

document.querySelector("form").addEventListener("submit", x);
