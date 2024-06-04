import { Component } from "@angular/core";

@Component({
  selector: "cmp-button",
  standalone: true,
  template: `<button><ng-content></ng-content></button>`,
})
export class ButtonComponent {
  
}
