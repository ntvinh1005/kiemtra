const inputName=document.getElementById("name");
const inputAge=document.getElementById("age");
const inputAddress=document.getElementById("address");
const tableBody=document.querySelector("#table tbody");

class Students{
    constructor{id,name,age,address}
    {
        this.id=id;
        this.name=name;
        this.age=age;
        this.address=address;
    }
}
let id = 0;

let listStudents = [];

function showListStudents(list) {
    let data = `<tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>`;

    for (let i = 0; i < list.length; i++) {
        data += `<tr>
                    <td>${i}</td>
                    <td>${list[i].id}</td>
                    <td>${list[i].name}</td>
                    <td>${list[i].age}</td>
                    <td>${list[i].address}</td>
                    <td><button onclick="editStudent(${i})">Edit</button></td>
                    <td><button onclick="delStudent(${i})">Delete</button></td>
                </tr>`
    }

    
    tableBody.innerHTML = "";

    
    tableBody.innerHTML = data;
}

function showAll(){
    showListStudents(listStudents);
}

function createStudent() {
    // check param
    let err = true;
    if (NAME.value == "") {
        alert("The name is required! Please try again!");
        err = false;
    }

    if (AGE.value == "") {
        alert("The age is required! Please try again!");
        err = false;
    }

    if (ADDRESS.value == "") {
        alert("The address is required! Please try again!");
        err = false;
    }

    if (checkNameStudent(NAME.value) == false) err = false;

    if (err == false) return;

    // increase student id
    id++;
    // add new student
    listStudents.push(new Student(id, NAME.value, parseInt(AGE.value), ADDRESS.value));
    // update table
    showListStudents(listStudents);
    console.log(listStudents);
}

function delStudent(index) {
    if (confirm(`Delete Student: id: ${listStudents[index].id} name: ${listStudents[index].name}`)) {
        listStudents.splice(index, 1);
        // update table
        showListStudents(listStudents);
        console.log(listStudents);

        alert("Delete Student success!")
    }
    else {
        alert("Just Don't delete it!");
    }
}

function editStudent(index) {
    let nameStudent = prompt(`Enter name to edit student ${listStudents[index].name} =>`, "");
    if (nameStudent == null) return;
    if (nameStudent == "") {
        alert("The name is required! Please try again!");
        return;
    }

    if (checkNameStudent(nameStudent) == false) return;

    let ageStudent = prompt(`Enter age to edit student ${listStudents[index].name} age=${listStudents[index].age} =>`, "");
    if (ageStudent == null) return;
    if (ageStudent == "") {
        alert("The age is required! Please try again!");
        return;
    }

    let adrStudent = prompt(`Enter address to edit: ${listStudents[index].address} =>`, "");
    if (adrStudent == null) return;
    if (adrStudent == "") {
        alert("The age is required! Please try again!");
        return;
    }

    // edit Student
    listStudents[index].name = nameStudent;
    listStudents[index].age = parseInt(ageStudent);
    listStudents[index].address = adrStudent;

    // update table
    showListStudents(listStudents);
    console.log(listStudents);
    
}

function searchStudent(){
    let searchListStudent = [];

    if (SEARCH.value == "") {
        alert("The name is required! Please try again!");
        showListStudents(listStudents);
        return;
    }

    let strTmp1 = (SEARCH.value).toLowerCase();
    console.log(strTmp1);

    for (let i = 0; i < listStudents.length; i++){
        let strTmp2 = (listStudents[i].name).toLowerCase();

        if (strTmp2.indexOf(strTmp1) != -1){
            searchListStudent.push(listStudents[i]);
            console.log(searchListStudent);
        }
    }

    if (searchListStudent.length == 0){
        alert("Khong co du lieu");
        return;
    }

    console.log(listStudents);
    console.log(searchListStudent);
    showListStudents(searchListStudent);
}

function checkNameStudent(name){
    for (let i = 0; i < listStudents.length; i++){
        if (name === listStudents[i].name){
            alert("Name already exists, please try again");
            return false;
        }
    }
    return true;
}

showListStudents(listStudents);
