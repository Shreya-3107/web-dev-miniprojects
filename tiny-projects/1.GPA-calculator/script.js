var count = 2;

function createNewRow() {
    var table = document.getElementById('myTable');
    var newRow = table.insertRow(-1);

    var cells = [];
    for (var i = 0; i < 4; i++) {
        cells.push(newRow.insertCell(i));
    }

    cells[0].innerHTML = count++;

    for (var i = 1; i < 4; i++) {
        var input = document.createElement("input");
        input.type = (i === 2) ? "number" : "text";
        input.id = "value" + (count - 1) + "c" + i;
        input.placeholder = (i === 1) ? "Eg: Data Structures" : ((i===2) ? "Eg: 3" : "Eg: A+");
        cells[i].appendChild(input);
    }
}


function deleteLastRow() {
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;

    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
        count--; 
    } else {
        alert("Cannot delete the last row. There must be at least one row in the table.");
    }
}

function calculate() {
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    var tot_credit = 0;
    var tot_credit_score = 0;
    var grade = { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0 };

    for (var i = 1; i < rowCount; i++) {
        var rowId = "value" + i + "c";
        console.log("Attempting to find inputs for row " + i);

        var credInput = table.querySelector("#" + rowId + "2");
        var scoreInput = table.querySelector("#" + rowId + "3");

        if (!credInput || !scoreInput) {
            console.error("Inputs not found for row " + i);
            return; // Stop further calculations
        }

        var cred = credInput.value;
        var score = scoreInput.value;

        if (cred.trim() === "" || score.trim() === "" || !grade.hasOwnProperty(score)) {
            console.warn("Please fill in valid values for credits and grades in row " + i);
            return; // Stop further calculations
        }

        tot_credit += parseInt(cred, 10);
        var cred_score = grade[score];
        tot_credit_score += parseInt(cred, 10) * cred_score;
    }

    var gpa = tot_credit_score / tot_credit;

    var op = document.querySelector(".output_field");
    var d = document.getElementById("disp");

    d.innerHTML = gpa.toFixed(2);
}



