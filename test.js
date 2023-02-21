let students = [];

function createStudent() {
    let newUser = document.getElementById('create').value;
    if (newUser == '') {
        alert('The name is required! Please try again!');
    } else {
        students.push(document.getElementById('create').value)
        showListStudent(students);
        document.getElementById('create').value = '';
        alert('Create Student Success!')
    }
}

function showListStudent (arr) {
    let txt = "<tr>"
    for (let i = 0; i < arr.length; i++) {
        txt += `<td>${i+1}</td>`
        txt += `<td id='${i}}'>${arr[i]}</td>`;
        txt += `<td><input type="button" value="Edit" onclick="updateStudent(${i})"></td>`;
        txt += `<td><input type="button" value="Delete" onclick="deleteStudent(${i})"></td>`;
        txt += `</tr>`;
    }
    document.getElementById('list').innerHTML = txt;
}

showListStudent(students);


function updateStudent (i) {
    let newName = prompt(`Enter the name to edit ---> ${students[i]}`)
    let sameName = students.includes(newName);
    if (newName == '') {
        let confirm = alert('The name is required! Please try again!')
    } else if (newName == null) {
        console.log('canceled!')
    } 
    else if (sameName) {
        alert('The name is existed! Please try again!');
    } else {
        students[i] = newName;
    }
    showListStudent(students);
}

function deleteStudent (i) {
    let deleteStudent = confirm(`Are you sure want to delete ${students[i]}? OK -> Delete | Cancel -> No`)
    if (deleteStudent) {
        students.splice(i,1);
        showListStudent(students);
        alert('Delete Student success!')
    } else {
        alert("Just Don't delete it!");
    }
}


function searchStudent() {
    let searchTerm = document.getElementById('search').value;
    let result = students.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(result);
    document.getElementById('search').value = '';
    showListStudent(result)
}
