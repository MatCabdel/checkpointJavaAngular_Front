import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyWishListComponent } from './pages/my-wish-list/my-wish-list.component';
import { WishFormComponent } from './pages/wish-form/wish-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'my-wish', component: MyWishListComponent },
  { path: 'make-a-wish', component: WishFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishRoutingModule { }
