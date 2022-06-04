var sold = document.querySelector("#sold");

function handlebill(e) {
  console.log(e);
  e.preventDefault();
  console.log(e);
  console.log(document.addbill.reason.value);
  console.log(document.addbill.montant.value);
  console.log(document.addbill.type.value);

  var sold = document.querySelector("#sold");
  var montant = document.addbill.montant.valueAsNumber;
  console.log(sold.textContent);
  if (document.addbill.type.value == "débit") {
    sold.textContent = sold.textContent - montant;
  } else {
    sold.textContent = parseInt(sold.textContent) + montant;
  }

  var table = document.getElementById("mytable");
  var elt = Document.createelement("tr");
  elt.textContent = sold.value;
  table.appendChild("tr");
}

document.addbill.addEventListener("submit", handlebill);
