import { Component, DestroyRef, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Wish } from '../../../models/wish';
import { WishListService } from '../../../shared/services/wish-list.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrl: './wish-card.component.scss'
})
export class WishCardComponent {

  @Input()
  wish!: Wish;

  @ViewChild('thisRef') elementRef!: ElementRef;
  startingPosition!: number;
  offsetRight = 0;
  showAction = false;
  modalCancelWish: boolean = false;


  destroyRef = inject(DestroyRef);

  wishService = inject(WishListService);
  modalEditWish: boolean = false;
  editedWish: Wish = { ...this.wish };


  openDeleteModal() {
    this.modalCancelWish = true;
  }

  closeModal() {
    this.modalCancelWish = false;
  }

  confirmDeleteWish() {
    this.wishService
      .removeWish(this.wish.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.modalCancelWish = false;
        console.log('Wish deleted:', this.wish);
      });
  }

  openEditModal() {
    this.modalEditWish = true;
    this.editedWish = { ...this.wish }; // Copy the wish to be edited
  }

  closeEditModal() {
    this.modalEditWish = false;
  }

  updateWish() {
    this.wishService.updateWish(this.editedWish).subscribe(updatedWish => {
      console.log('Wish updated:', updatedWish);
      this.wish = updatedWish; 
      this.modalEditWish = false; 
    });
  }

}
