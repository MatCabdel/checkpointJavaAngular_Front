import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishRoutingModule } from './wish-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WishFormComponent } from './pages/wish-form/wish-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyWishListComponent } from './pages/my-wish-list/my-wish-list.component';
import { WishCardComponent } from './components/features/wish-card/wish-card.component';
import { ModalDeleteComponent } from './components/features/modal-delete/modal-delete.component';
import { ModalEditComponent } from './components/features/modal-edit/modal-edit.component';
import { NavComponent } from './components/ui/nav/nav.component';


@NgModule({
  declarations: [
    WishFormComponent,
    HomePageComponent,
    MyWishListComponent,
    WishCardComponent,
    ModalDeleteComponent,
    ModalEditComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    WishRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class WishModule { }
