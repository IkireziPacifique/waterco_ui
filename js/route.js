var selectedRec = null;
var baseUrl = "http://localhost:5000";


$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl+"/routes",
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((Route) => {
                addRecordToTable(Route);
            });
        }
    });
});


function addRecordToTable(data) {
    var routesList = document.getElementById("routesList").getElementsByTagName("tbody")[0];
    var newRecord = routesList.insertRow(routesList.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.RouteId;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.No_Plants;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.Status;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`;
}


function onFormSubmit() {
    console.log("Submitted");
    var formData = {};
    formData["Cname"] = document.getElementById("Cname").value;
    formData["Phone_no"] = document.getElementById("Phone_no").value;

    if (selectedRec == null) {
        saveFormData(formData);
    } else {
        updateFormRecord(formData);
    }

    clearForm();
}

function saveFormData(data) {
    console.log("Done!!!")
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/members",
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
    document.getElementById("Cname").value = selectedRec.cells[0].innerHTML;
    document.getElementById("Phone_no").value = selectedRec.cells[1].innerHTML;
}

function updateFormRecord(data) {
    selectedRec.cells[0].innerHTML = data.Cname;
    selectedRec.cells[1].innerHTML = data.Phone_no;
}

function onDelete(td) {
    if (confirm('Confirm deletion')) {
        row = td.parentElement.parentElement;
        document.getElementById("clist").deleteRow(row.rowIndex);
        clearForm();
    }
}

function clearForm(td) {
    document.getElementById("Cname").value = "";
    document.getElementById("Phone_no").value = "";
}