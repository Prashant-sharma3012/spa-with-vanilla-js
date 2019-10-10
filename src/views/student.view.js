import { FIELD_TO_CLASS_MAP } from '../util/fieldClassMap';

const studentTemplate = `
<div>
  <div class="navbar bg-dark">
    <a class="navbar-brand text-light app-nav-button">Student MS</a>
  </div>
    Hello
</div>
`;

export class StudentView {

  // method to display the page
  render = () => {
    let root = document.querySelector(FIELD_TO_CLASS_MAP.root);
    root.innerHTML = studentTemplate;
  }
}