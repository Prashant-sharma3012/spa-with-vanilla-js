import './index.scss';
import { HomeView } from './src/views/home.view';

class main {
  homePage;
  constructor() {

  }

  start = () => {
    this.homePage = new HomeView();
    this.homePage.render()
  }
}

let app = new main();

app.start();