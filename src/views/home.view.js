import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';
import Router from '../routes/routing.handler';
import dataService from '../services/localStorage.service'

const homeTemplate = `
<div>
  <div class="navbar bg-dark">
    <a class="navbar-brand text-light app-nav-button">Student MS</a>
  </div>

  <div class="home_container">
    <div class="d-flex justify-content-end">
      <button class="btn btn-success app-add-student-btn">Add New Student</button>
    </div>

    <div class="home_table--container">
      <table class="table app-student-table">
        <thead class="thead-dark">
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="app-student-details">
        </tbody>
      </table>
    </div>
  </div>
</div>
`;

export class HomeView {

  // method to append student details
  addStudentDetail = (students) => {
    let tableBody = document.querySelector(FIELD_TO_CLASS_MAP.studentDetails);
    students.map(student => {

      let studentDetailTemplate = `
      <tr>
        <td>${student.Id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.city}</td>
        <td>${student.state}</td>
        <td>${student.country}</td>
        <td >
        <button name="editStudent" value=${student.Id}>Edit</button>
        <button name="deleteStudent" value=${student.Id}>Delete</button></td>
      </tr>`;

      tableBody.insertAdjacentHTML("beforeend", studentDetailTemplate);
    });
  }

  addStudent = () => {
    // call the router function to move to a different route
    Router.goTo('/manageStudent');
  }

  handleTableActions = (event) => {
    event.target.name === "editStudent" ?
      dataService.editStudent(event.target.value) :
      event.target.name === "deleteStudent" ? dataService.deleteStudent("delete", event.target.value) : event.preventDefault()
  }

  // method to display the page
  render = () => {
    let root = document.querySelector(FIELD_TO_CLASS_MAP.root);
    // i know we should not use innerHTML, will replace it with a better solution
    root.innerHTML = homeTemplate;

    // add event handlers
    let addStudentBtn = document.querySelector(FIELD_TO_CLASS_MAP.addStudentBtn);
    addStudentBtn.addEventListener("click", this.addStudent);

    let studentTable = document.querySelector(FIELD_TO_CLASS_MAP.appTable);
    studentTable.addEventListener("click", this.handleTableActions);

    // render student details
    this.addStudentDetail(dataService.getStudents());
  }

}