import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewsComponent } from './pages/reviews/reviews.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReviewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reviews';
}
