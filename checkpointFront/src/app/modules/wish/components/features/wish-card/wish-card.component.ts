import { Component, DestroyRef, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { Wish } from '../../../models/wish';
import { WishListService } from '../../../shared/services/wish-list.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrl: './wish-card.component.scss'
})
export class WishCardComponent implements OnInit {

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
  editedWish: Wish = {} as Wish;
  

  ngOnInit() {
    this.editedWish = { ...this.wish }; 
  }


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
    this.editedWish = { ...this.wish }; 
  }

  closeEditModal() {
    this.modalEditWish = false;
  }

  updateWish() {
    console.log('Before Update:', this.editedWish);
    this.wishService.updateWish(this.editedWish).subscribe(updatedWish => {
      console.log('Wish updated:', updatedWish);
      this.wish = updatedWish; 
      this.modalEditWish = false;
      console.log('After Update:', this.wish);
    });
  }

}
