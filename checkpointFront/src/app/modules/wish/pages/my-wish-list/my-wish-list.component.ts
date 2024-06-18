import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wish } from '../../models/wish';
import { WishListService } from '../../shared/services/wish-list.service';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrl: './my-wish-list.component.scss'
})
export class MyWishListComponent implements OnInit {

  wishList$: Observable<Wish[]> = this._wishService.getWishList$();
  wishList: Wish[] = [];
  modalEditWish = false;
  modalCancelWish = false;
  editedWish!: Wish;
  wishToDelete!: Wish;

  constructor(private _wishService: WishListService) { }

  ngOnInit(): void {
    this._wishService.getWishList$().subscribe((wishes) => {
      this.wishList = wishes;
    });

    };

    openEditModal(wish: Wish) {
      this.editedWish = { ...wish }; 
      this.modalEditWish = true;
    }
  
    closeEditModal() {
      this.modalEditWish = false;
    }
  
    updateWish() {
      this._wishService.updateWish(this.editedWish).subscribe(updatedWish => {
        console.log('Wish updated:', updatedWish);
        this.modalEditWish = false; 
        const index = this.wishList.findIndex(w => w.id === updatedWish.id);
        if (index !== -1) {
          this.wishList[index] = updatedWish;
        }
      });
    }
  
    openDeleteModal(wish: Wish) {
      this.wishToDelete = wish;
      this.modalCancelWish = true;
    }
  
    closeModal() {
      this.modalCancelWish = false;
    }
  
    confirmDeleteWish() {
      this._wishService.removeWish(this.wishToDelete.id).subscribe(() => {
        this.modalCancelWish = false;
        console.log('Wish deleted:', this.wishToDelete);
        this.wishList = this.wishList.filter(w => w.id !== this.wishToDelete.id);
      });
    }
  }

