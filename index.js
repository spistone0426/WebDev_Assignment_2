function addRow() {
    var myTasks = document.getElementById('Task');
    var table = document.getElementById('myTable');

    var rowCount = table.rows.length;
    var row = table.insertRow();

    row.insertCell(0).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML = myTasks.value;
    row.insertCell(2).innerHTML = '<input type="button" value="Priority" onclick="priorityColor(this)">'
    row.insertCell(3).innerHTML = '<input type="button" value="Complete" onclick="strikeThrough(this)">'

    //Sources:
    // https://www.w3schools.com/howto/howto_js_todolist.asp
   // https://www.mysamplecode.com/2012/04/generate-html-table-using-javascript.html
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index);
}

function priorityColor() {
    var row = document.getElementById("myTable");

    var listItems = row.getElementsByTagName("tr");

    for(tr of listItems){
        tr.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove("active");
            } else{
                this.classList.add("active");
            }
        })
    }
}

function strikeThrough() {
    var row = document.getElementById("myTable");
    var listitems = row.getElementsByTagName("tr");

    for (tr of listitems) {
        tr.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove("checked");
            } else {
                this.classList.add("checked");
            }
        })

    }
}




