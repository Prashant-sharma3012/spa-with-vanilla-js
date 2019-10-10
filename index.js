import './index.scss';
import { HomeView } from './src/views/home.view';

class main {
  homePage;
  constructor() {
    // this acts as global app state
    this.state = {}
  }

  start = () => {
    this.homePage = new HomeView();
    this.homePage.render()
  }
}

let app = new main();

app.start();