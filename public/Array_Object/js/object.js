function showEmployees() {
    const tableBody = document.getElementById('employee-body');
    tableBody.innerHTML = '';  

    employees.forEach(element => {
        const row = `<tr>
                        <td>${element.emp_id}</td>
                        <td>${element.name}</td>
                        <td>${element.position}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
}

function addEmployee() {
    const id = document.getElementById('id_emp').value;
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;

    if (id && name && position) {
        employees.push({ emp_id: id, name: name, position: position });
        document.getElementById('id_emp').value = '';
        document.getElementById('name').value = '';
        document.getElementById('position').value = '';
        showEmployees();
        return; 
    }
    
    
}
