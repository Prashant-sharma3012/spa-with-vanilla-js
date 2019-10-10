import { HomeView } from '../views/home.view';
import { StudentView } from '../views/student.view';

const APP_ROUTES = {
  "/": HomeView,
  "/manageStudent": StudentView
}

class Router {

  constructor(route_config) {
    this.route_config = route_config;
  }

  current = () => window.location.href;

  host = () => window.location.origin;

  loadApp = () => {
    let atLocation = this.current().split(this.host())[1];
    this.goTo(atLocation);
  }

  goTo = (route) => {
    window.history.pushState(
      {},
      route,
      window.location.origin + route
    );

    let componentInstance = new this.route_config[route];
    componentInstance.render();
  }

}

// why? i belive router should not have multiple instances running
const instance = new Router(APP_ROUTES);
export default instance;