import { Component } from "@angular/core";

@Component({
  selector: "cmp-cart",
  template: `<p>{{price | currency : 'EUR' : 'symbol'}}</p>`,
})
export class CartComponent {
  price = 1000;
}
