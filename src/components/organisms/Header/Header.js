import * as core from "../../../core";
import "../../../core/Router/Link";
import { appRoutes } from "../../../constants/appRoutes";

export class Header extends core.Component {
  render() {
    return `
    <nav class="navbar navbar-expand-lg bg-secondary" style="--bs-bg-opacity: .3;>
            <div class="container" >
                <a class="navbar-brand" href="#">
                    <img src="./assets/images/logo.svg" alt="Bootstrap" width="30" height="24">
                    Delivery
                </a>
            </div>
            <div class="container-fluid justify-content-end" >
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <li class="nav-item">
                            <it-link to='${appRoutes.admin}' title="">Admin</it-link>
                            <a class="nav-link white-text" aria-current="page" href="#">Home Page</a>
                        </li>
                        <li class="nav-item">
                        <it-link to='${appRoutes.home}' title="Admin">Admin</it-link>
                            <a class="nav-link white-text" href="#">Admin Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link white-text" href="#">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link white-text" href="#">Sign In</a>
                        </li>
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle white-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Basket
                            </span>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
        `;
  }
}

customElements.define("delivery-header", Header);

{
  /* <div class="dropdown">

<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Выпадающая форма
</button>
<form class="dropdown-menu p-4">
    <div class="container card-item col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</form>
</div> */
}
