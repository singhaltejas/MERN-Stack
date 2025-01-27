
const myTable = document.getElementById("expense-table");


function submitForm() {
  // Get the input values
  event.preventDefault();
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const amount = document.getElementById("amount").value;

  let row = myTable.insertRow();

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  // Add some text to the new cells:
  cell1.innerHTML = description;
  cell2.innerHTML = type;
  cell3.innerHTML = amount;

  document.getElementById('expense-form').reset();
  

}
