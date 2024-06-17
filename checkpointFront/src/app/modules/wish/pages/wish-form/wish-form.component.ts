import { Component, EventEmitter, Output } from '@angular/core';
import { Wish } from '../../models/wish';
import { WishListService } from '../../shared/services/wish-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrl: './wish-form.component.scss'
})
export class WishFormComponent {

  newWish : Wish = {
    id: 0,
    title: "",
    picture: "",
    description: "",
    estimatePrice: 0,
    type: "",
    productUrl: "",
    userId: 0
  }
  
  constructor(private wishService: WishListService, private router: Router) { }

  @Output()
  sendWish : EventEmitter<Wish> = new EventEmitter();

  createWish(): void {
    console.log('Creating wish with data:', this.newWish); 
    this.wishService.createWish(this.newWish).subscribe({
      next: (wish) => {
        console.log("Wish created:", wish);
        this.router.navigate(['/my-wish']);
      },
      error: (error) => {
        console.error("Error creating wish:", error);
      }
    });
  }


}
