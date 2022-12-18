import * as core from "./core";
import "./components";
import { appRoutes } from "./constants/appRoutes.js";

export class App extends core.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLogged: false,
      error: "",
    };
  }

  render() {
    return `     
      <div id="shell">
        <it-router>
              <delivery-header>/delivery-header>
              <div class="main">
                <it-route path="${appRoutes.home}" component="home-page" title="Home Page"></it-route>
                <it-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></it-route>
                <it-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></it-route>
                <it-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></it-route>
                <it-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></it-route>
                <it-outlet></it-outlet>
              </div>
        </it-router>
      </div>
    `;
  }
}

customElements.define("delivery-app", App);
