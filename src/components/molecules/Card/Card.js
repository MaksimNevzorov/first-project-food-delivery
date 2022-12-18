import { Component } from "../../../core";

export class Card extends Component {
  render() {
    return `
        <div class="row row-cols-5">    
            <div class="container card-item col">
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">2323</h5>
                        <p class="card-text">2323</p>
                        <p><strong>22</strong></p>
                        <button href="#" class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>    
        </div>
        `;
  }
}

customElements.define("food-card", Card);
