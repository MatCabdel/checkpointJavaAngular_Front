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

  constructor(private _wishService: WishListService) { }

  ngOnInit(): void {
    this.wishList$ = this._wishService.getWishList$();

    };
  }

