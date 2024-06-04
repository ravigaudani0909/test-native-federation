import { Component } from '@angular/core';
import { CartComponent } from 'test-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
