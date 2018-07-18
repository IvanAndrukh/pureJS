let rIndex,
table = document.getElementById("table");

function validateEmail(email){
let re = /\S+@\S+\.\S+/;
return re.test(email);
}

function checkEmptyInput(){
let isEmpty = false,
  fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  age = document.getElementById("age").value,
  email = document.getElementById("email").value;

if(fname === ""){
  alert("First Name Connot Be Empty");
  isEmpty = true;
}
else if(lname === ""){
  alert("Last Name Connot Be Empty");
  isEmpty = true;
}
else if(age === ""){
  alert("Age Connot Be Empty");
  isEmpty = true;
}
else if(!validateEmail(email)){
  alert("Enter correct email");
  isEmpty = true;
}
return isEmpty;
}

function addHtmlTableRow(){
if(!checkEmptyInput()){
let newRow = table.insertRow(table.length),
  cell1 = newRow.insertCell(0),
  cell2 = newRow.insertCell(1),
  cell3 = newRow.insertCell(2),
  cell4 = newRow.insertCell(3);
  fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  age = document.getElementById("age").value;
  email = document.getElementById("email").value;

cell1.innerHTML = fname;
cell2.innerHTML = lname;
cell3.innerHTML = age;
cell4.innerHTML = email;
selectedRowToInput();
}
}
function selectedRowToInput(){
for(let i = 1; i < table.rows.length; i++){
table.rows[i].onclick = function(){
  rIndex = this.rowIndex;
  document.getElementById("fname").value = this.cells[0].innerHTML;
  document.getElementById("lname").value = this.cells[1].innerHTML;
  document.getElementById("age").value = this.cells[2].innerHTML;
  document.getElementById("email").value = this.cells[3].innerHTML;
};
}
}
selectedRowToInput();
function editHtmlTbleSelectedRow(){
let fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  age = document.getElementById("age").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = fname;
table.rows[rIndex].cells[1].innerHTML = lname;
table.rows[rIndex].cells[2].innerHTML = age;
table.rows[rIndex].cells[3].innerHTML = email;
}
}
function removeSelectedRow(){
table.deleteRow(rIndex);
document.getElementById("fname").value = "";
document.getElementById("lname").value = "";
document.getElementById("age").value = "";
document.getElementById("email").value = "";
}