import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import "../../organisms";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movies: [],
    };
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getMovies() {
    this.toggleIsLoading();
    databaseService
      .read("movies")
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return `
        <div id="content">
          <div class="box">
            <div class="head">
              <h2>LATEST TRAILERS</h2>
              <p class="text-right"><a href="#">See all</a></p>
            </div>
            <ul class="nav justify-content-center mt-5 menu">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          </div>
        </div>
        <div class="cl">&nbsp;</div>
    `;
  }
}

customElements.define("home-page", HomePage);
