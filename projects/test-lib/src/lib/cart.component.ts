import { CurrencyPipe, registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID } from "@angular/core";

import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
registerLocaleData(localeDe, "de", localeDeExtra);

@Component({
  selector: "cmp-cart",
  standalone: true,
  imports: [CurrencyPipe],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "de-DE",
    },
  ],
  template: `<p>{{price | currency : 'EUR' : 'symbol'}}</p>`,
})
export class CartComponent {
  price = 1000;
}
