function logSkin() {
  let product = document.getElementById("product").value;
  let reaction = document.getElementById("reaction").value;

  let entry = document.createElement("li");
  entry.textContent = product + " → " + reaction;

  document.getElementById("log").appendChild(entry);
}