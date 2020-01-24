import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';
import dataService from '../services/localStorage.service'
import Router from '../routes/routing.handler';
import Toast from './toast';

const studentTemplate = `
<div id="app-add-student-page" class="app-add-student-page">
  <div class="navbar bg-dark">
    <a class="navbar-brand text-light app-nav-button">Student MS</a>
  </div>
  <section id="cover" class="min-vh-100 app-student-form-container">
    <div id="cover-caption">
      <div class="container">
        <div class="row text-white">
          <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
            <h1 class="display-4 py-2 text-truncate">Fill Details</h1>
            <div class="px-2">
              <form action="" class="app-student-form justify-content-center">
                <div class="form-group">
                  <label class="sr-only">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="form-group">
                  <label class="sr-only">City</label>
                  <input type="text" class="form-control" id="city" placeholder="City">
                </div>
                <div class="form-group">
                  <label class="sr-only">State</label>
                  <input type="text" class="form-control" id="state" placeholder="State">
                </div>
                <div class="form-group">
                  <label class="sr-only">Country</label>
                  <input type="text" class="form-control" id="country" placeholder="Country">
                </div>
                <div class="form-group">
                  <label class="sr-only">Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email">
                </div>
                <button class="btn btn-success app-add-student-details">Add</button>
              </form>
              <button class="btn btn-success app-back-from-student">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
`;

export class StudentView {
  addStudentDetailsOnClick = (e) => {

    e.preventDefault()
    let studentData = {
      name: document.getElementById('name').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      country: document.getElementById('country').value,
      email: document.getElementById('email').value
    }
    // console.log(studentData)
    dataService.addStudent(studentData)
  }

  goHome = () => Router.goTo('/');

  // handleToastDismiss = (event) => {
  //   let classes = event.target.className.split(' ');

  //   if (classes.includes(FIELD_TO_CLASS_MAP.toastCloseButton.split('.')[1])) {
  //     let studentForm = document.querySelector(FIELD_TO_CLASS_MAP.studentForm);
  //     let toast = document.getElementById(FIELD_TO_CLASS_MAP.appToastId);
  //     studentForm.removeChild(toast);
  //   }
  // }

  // notify = (message, type) => {
  //   let toast = Toast.getToast(message, type);
  //   let studentForm = document.querySelector(FIELD_TO_CLASS_MAP.studentForm);
  //   studentForm.insertAdjacentHTML('afterbegin', toast);
  // }

  addStudentDetailsOnSubmit = (e) => {
    e.preventDefault();

    let studentForm = document.querySelector(FIELD_TO_CLASS_MAP.studentForm);
    let formData = {};

    [...studentForm.elements].map(e => {
      formData[e.id] = e.value;
    });

    // console.log(studentData)
    dataService.addStudent(formData)
    Toast.notify("Student Added Successfully", "success")
  }

  // method to display the page
  render = () => {
    let root = document.querySelector(FIELD_TO_CLASS_MAP.root);
    root.innerHTML = studentTemplate;

    // let addStudentFormBtn = document.querySelector(FIELD_TO_CLASS_MAP.addStudentDetails);
    // addStudentFormBtn.addEventListener("click", this.addStudentDetailsOnClick);

    let studentForm = document.querySelector(FIELD_TO_CLASS_MAP.studentForm);
    studentForm.addEventListener("submit", this.addStudentDetailsOnSubmit);

    let goBackToHome = document.querySelector(FIELD_TO_CLASS_MAP.goBackFromStudent);
    goBackToHome.addEventListener("click", this.goHome);

    // let addStudentPage = document.querySelector(FIELD_TO_CLASS_MAP.addStudentPage);
    // addStudentPage.addEventListener("click", this.handleToastDismiss);
  }
}