import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetzonelessComponent } from './getzoneless/getzoneless.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetzonelessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v18';
}
