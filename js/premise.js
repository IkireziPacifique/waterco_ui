var selectedRec = null;
var selectedRecId = null;
var baseUrl = "http://localhost:5000";


$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl+"/premises",
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((Premises) => {
                addRecordToTable(Premises);
            });
        }
    });
});


function addRecordToTable(data) {
    var premisesList = document.getElementById("premisesList").getElementsByTagName("tbody")[0];
    var newRecord = premisesList.insertRow(premisesList.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.PremisesId;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.Meter_no;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.status;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a href="demo.php?page=customerdash&id="` + data.PremisesId + `>View</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}


function onFormSubmit() {
    console.log("Submitted");
    var formData = {};
    formData["Meter_no"] = document.getElementById("Meter_no").value;
    formData["status"] = document.getElementById("status").value;

    if (selectedRec == null) {
        saveFormData(formData);
    } else {
        updateFormRecord(formData);
    }

    clearForm();
}

function saveFormData(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/premises",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTable(response.data);
        }
    });
}

function onEdit(td) {
    selectedRec = td.parentElement.parentElement;
    selectedRecId = selectedRec.cells[0].innerHTML;
    document.getElementById("Meter_no").value = selectedRec.cells[1].innerHTML;
    document.getElementById("status").value = selectedRec.cells[2].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/premises/" + selectedRecId,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            updateTableRecord(data);
        }
    });
}

function updateTableRecord(data){
    selectedRec.cells[0].innerHTML = data.Meter_no;
    selectedRec.cells[1].innerHTML = data.status;
}

function onDelete(td) {
    if (confirm('Confirm deletion')) {
        row = td.parentElement.parentElement;
        document.getElementById("premisesList").deleteRow(row.rowIndex);
        clearForm();
    }
}

function clearForm(td) {
    document.getElementById("Meter_no").value = "";
    document.getElementById("status").value = "";
}