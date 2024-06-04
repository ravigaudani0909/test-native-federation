import { CurrencyPipe, registerLocaleData } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";

import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
registerLocaleData(localeDe, "de", localeDeExtra);

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CurrencyPipe
  ],
  exports: [
    CartComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "de-DE",
    },
  ],
})
export class TestLibrary {
}

// Typescript exports
export { CartComponent };
