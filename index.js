import './index.scss';
import Router from './src/routes/routing.handler';

class main {
  homePage;
  constructor() {
    // this acts as global app state
    this.state = {}
  }

  start = () => Router.loadApp();

}

let app = new main();

app.start();