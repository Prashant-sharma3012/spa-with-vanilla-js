let instance = null;

class StudentService {

  students = [];

  addStudent = (student) => this.students.push(student);

  editStudent = (student) => this.students = [...this.students.filter(e => e.studentId !== student.studentId), student];

  deleteStudent = (studentId) => this.students = [...this.students.filter(e => e.studentId !== student.studentId)];

  getStudents = () => this.students;
}

instance = instance ? instance : new StudentService();

export default instance;