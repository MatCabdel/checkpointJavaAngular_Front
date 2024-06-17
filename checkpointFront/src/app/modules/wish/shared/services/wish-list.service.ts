import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wish } from '../../models/wish';
import { environment } from '../../../../environnement/environnement';
import { Observable, map, tap } from 'rxjs';
import { WishApiResponse } from '../../models/wishApiResponse';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private httpClient: HttpClient) { }

  getWishList$(): Observable<Wish[]> {
    return this.httpClient
      .get<Wish[]>(environment.BASE_URL + '/api/v1/wish/get/all')
      .pipe(
        tap((res) => console.log("wishes:", res))
      );
  }

  createWish(wish: Wish): Observable<Wish> {
    return this.httpClient
      .post<Wish>(environment.BASE_URL + '/api/v1/wish/add', wish)
      .pipe(
        tap((newWish) => console.log("Created wish:", newWish))
      );
  }

  removeWish(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(environment.BASE_URL + `/api/v1/wish/delete/${id}`)
      .pipe(
        tap(() => console.log(`Deleted wish with id ${id}`))
      );
  }

  updateWish(wish: Wish): Observable<Wish> {
    return this.httpClient.put<Wish>(`${environment.BASE_URL}/api/v1/wish/update/${wish.id}`, wish)
      .pipe(
        tap((updatedWish) => console.log("Updated wish:", updatedWish))
      );
  }
}
