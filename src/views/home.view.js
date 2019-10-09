import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';

const homeTemplate = `
<div>
  <div class="nav">
    <li class="nav-item">
      <a class="nav-link app-nav-button">Student MS</a>
    </li>
  </div>

  <div>
    <button class="btn btn-success app-add-student-btn">Add New Student</button>
  </div>

  <div>
    <table>
      <thead>
        <tr>
          <td>Student Id</td>
          <td>Name</td>
          <td>Class</td>
          <td>City</td>
          <td>State</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody class="app-student-details">
      </tbody>
    </table>
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

  // method to display the page
  render = () => {
    let root = document.querySelector(FIELD_TO_CLASS_MAP.root);
    root.insertAdjacentHTML("afterbegin", homeTemplate);
    this.addStudentDetail(test_data);
  }

}