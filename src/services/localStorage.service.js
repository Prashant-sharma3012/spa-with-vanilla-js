import Router from '../routes/routing.handler';
class DataService {

  getStudents = () => JSON.parse(localStorage.getItem("students")) || []

  setLocal = (name, obj) => {
    if (name === "addStudent") {
      let studentsArr = JSON.parse(localStorage.getItem("students")) || []
      studentsArr.push(obj)
      localStorage.setItem("students", JSON.stringify(studentsArr))
    }
    else if (name === "editStudent") {
      localStorage.setItem("student", JSON.stringify(obj))
    }
  }

  getEditingStudent = () => {
    let student = JSON.parse(localStorage.getItem("student")) || []
    return student[0] || {}
  }

  addStudent = (student) => {
    let newStudent = { Id: this.getStudents().length + 1, ...student }
    this.setLocal("addStudent", newStudent)
    Router.goTo('/');
  }

  deleteStudent = (action, studentId) => {
    let updated_test_data = this.getStudents().filter(student => student.Id != studentId)
    localStorage.setItem("students", JSON.stringify(updated_test_data))
    action === "delete" ? window.location.reload() : ""
  }

  editStudent = (studentId) => {
    let student = this.getStudents().filter(obj => {
      return obj.Id == studentId
    })
    
    this.setLocal("editStudent", student)
    Router.goTo('/editStudent');
  }

  saveEditStudent = (studentData) => {
    localStorage.removeItem("student")
    this.deleteStudent("", studentData.Id)
    this.setLocal("addStudent", studentData)
    Router.goTo('/');
  }
}

let dataService = new DataService()
export default dataService