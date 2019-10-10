import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';
import Router from '../routes/routing.handler';

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
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Student Id</td>
            <th>Name</td>
            <th>Class</td>
            <th>City</td>
            <th>State</td>
            <th>Country</td>
          </tr>
        </thead>
        <tbody class="app-student-details">
        </tbody>
      </table>
    </div>
  </div>
</div>
`;

const test_data = [
  {
    Id: 1,
    name: 'prashant sharma',
    class: '',
    city: 'nagda',
    state: 'MP',
    country: 'India'
  },
  {
    Id: 2,
    name: 'prashant sharma',
    class: '',
    city: 'nagda',
    state: 'MP',
    country: 'India'
  }
]

export class HomeView {

  // method to append student details
  addStudentDetail = (students) => {
    let tableBody = document.querySelector(FIELD_TO_CLASS_MAP.studentDetails);

    students.map(student => {

      let studentDetailTemplate = `
      <tr>
        <td>${student.Id}</td>
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>${student.city}</td>
        <td>${student.state}</td>
        <td>${student.country}</td>
      </tr>`;

      tableBody.insertAdjacentHTML("beforeend", studentDetailTemplate);
    });
  }

  addStudent = () => {
    // call the router function to move to a different route
    Router.goTo('/manageStudent');
  }

  // method to display the page
  render = () => {
    let root = document.querySelector(FIELD_TO_CLASS_MAP.root);
    // root.insertAdjacentHTML("afterbegin", homeTemplate);
    root.innerHTML = homeTemplate;

    // add event handlers
    let addStudentBtn = document.querySelector(FIELD_TO_CLASS_MAP.addStudentBtn);
    addStudentBtn.addEventListener("click", this.addStudent);

    // render student details
    this.addStudentDetail(test_data);
  }

}