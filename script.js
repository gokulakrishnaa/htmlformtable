function myFunction() {
  var cell1 = [];
  var cell2 = [];
  var cell3 = [];
  var cell4 = [];
  var cell5 = [];
  var cell6 = [];
  var cell7 = [];
  var cell8 = [];
  var n = 1;
  var x = 0;
  var table = document.querySelector(".mytable");
  var row = table.insertRow(n);

  cell1[x] = document.getElementById("fname").value;
  cell2[x] = document.getElementById("lname").value;
  cell3[x] = document.getElementById("address").value;
  cell4[x] = document.getElementById("pin").value;
  cell5[x] = document.getElementById("gender").value;
  cell6[x] = document.getElementById("food").value;
  cell7[x] = document.getElementById("state").value;
  cell8[x] = document.getElementById("country").value;

  var cel1 = row.insertCell(0);
  var cel2 = row.insertCell(1);
  var cel3 = row.insertCell(2);
  var cel4 = row.insertCell(3);
  var cel5 = row.insertCell(4);
  var cel6 = row.insertCell(5);
  var cel7 = row.insertCell(6);
  var cel8 = row.insertCell(7);

  cel1.innerHTML = cell1[x];
  cel2.innerHTML = cell2[x];
  cel3.innerHTML = cell3[x];
  cel4.innerHTML = cell4[x];
  cel5.innerHTML = cell5[x];
  cel6.innerHTML = cell6[x];
  cel7.innerHTML = cell7[x];
  cel8.innerHTML = cell8[x];
}
