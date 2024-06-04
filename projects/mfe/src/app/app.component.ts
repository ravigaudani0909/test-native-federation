import { Component } from '@angular/core';
import { TestLibrary } from 'test-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestLibrary],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
