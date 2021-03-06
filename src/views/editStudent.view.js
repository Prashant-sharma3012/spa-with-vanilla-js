import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';
import dataService from '../services/localStorage.service'

const makeEditTemplate = () => {

  const student = dataService.getEditingStudent()
  const studentTemplate = `
  <div>
    <div class="navbar bg-dark">
      <a class="navbar-brand text-light app-nav-button">Student MS</a>
    </div>
    <section id="cover" class="min-vh-100">
      <div id="cover-caption">
        <div class="container">
          <div class="row text-white">
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 class="display-4 py-2 text-truncate">Fill Details</h1>
              <div class="px-2">
                <form action="" class="app-edit-student-form justify-content-center">
                  <div class="form-group">
                    <label class="sr-only">Name</label>
                    <input type="text" value='${student.name}' class="form-control" id="name" placeholder="Name">
                  </div>
                  <div class="form-group">
                    <label class="sr-only">City</label>
                    <input type="text" value='${student.city}' class="form-control" id="city" placeholder="City">
                  </div>
                  <div class="form-group">
                    <label class="sr-only">State</label>
                    <input type="text" class="form-control" value='${student.state}' id="state" placeholder="State">
                  </div>
                  <div class="form-group">
                    <label class="sr-only">Country</label>
                    <input type="text" class="form-control" id="country" value='${student.country}' placeholder="Country">
                  </div>
                  <div class="form-group">
                    <label class="sr-only">Email</label>
                    <input type="text" class="form-control" id="email" value='${student.email}' placeholder="Email">
                  </div>
                  <button class="btn btn-success app-add-student-details">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`;

  return studentTemplate;
}

export class editStudent {

  addStudentDetails = (e) => {
    e.preventDefault()
    let studentData = {
      Id: dataService.getEditingStudent().Id,
      name: document.getElementById('name').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      country: document.getElementById('country').value,
      email: document.getElementById('email').value
    }
    
    dataService.saveEditStudent(studentData)
  }

  editStudentDetailsOnSubmit = (e) => {
    e.preventDefault();

    let studentForm = document.querySelector(FIELD_TO_CLASS_MAP.editStudentForm);
    let formData = {};

    [...studentForm.elements].map(e => {
      formData[e.id] = e.value;
    });

    formData.Id = dataService.getEditingStudent().Id

    // console.log(studentData)
    dataService.saveEditStudent(formData)
  }

  // method to display the page
  render = () => {
    let root = document.querySelector(FIELD_TO_CLASS_MAP.root);
    root.innerHTML = makeEditTemplate();

    // let addStudentFormBtn = document.querySelector(FIELD_TO_CLASS_MAP.addStudentDetails);
    // addStudentFormBtn.addEventListener("click", this.addStudentDetails);

    let studentForm = document.querySelector(FIELD_TO_CLASS_MAP.editStudentForm);
    studentForm.addEventListener("submit", this.editStudentDetailsOnSubmit);
  }
}