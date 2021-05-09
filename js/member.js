var selectedRec = null;
var selectedRecId = null;
var baseUrl = "http://localhost:5000";


$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl+"/members",
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((Member) => {
                addRecordToTable(Member);
            });
        }
    });
});


function addRecordToTable(data) {
    var clist = document.getElementById("clist").getElementsByTagName("tbody")[0];
    var newRecord = clist.insertRow(clist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.CustomerId;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.Cname;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.Phone_no;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a href="demo.php?page=customerdash&id="` + data.CustomerId + `>View</a>
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
    selectedRecId = selectedRec.cells[0].innerHTML;
    document.getElementById("Cname").value = selectedRec.cells[1].innerHTML;
    document.getElementById("Phone_no").value = selectedRec.cells[2 ].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/members/" + selectedRecId,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            updateTableRecord(data);
        }
    });
}

function  updateTableRecord(data){
    selectedRec.cells[0].innerHTML = selectedRecId;
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