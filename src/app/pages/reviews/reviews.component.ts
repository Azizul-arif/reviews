import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      "id": 1,
      "name": "susan smith",
      "title": "web developer",
      "image": '../../../assets/image01.jpeg',
      "description": "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
      "id": 2,
      "name": "anna johnson",
      "title": "web developer",
      "image": '../../../assets/person-2.jpeg',
      "description": "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
      "id": 3,
      "name": "peter jones",
      "image": '../../../assets/person-3.jpeg',
      "description": "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
      "id": 4,
      "name": "bill anderson",
      "title": "the boss",
      "image": '../../../assets/person-4.jpeg',
      "description": "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
  ];

  currentReviewIndex = 0;

  fetchNext() {
    this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
  }

  fetchPrevious() {
    this.currentReviewIndex = (this.currentReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
