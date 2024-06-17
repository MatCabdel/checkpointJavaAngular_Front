import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WishModule } from './modules/wish/wish.module';
import { WishListService } from './modules/wish/shared/services/wish-list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WishModule
  ],
  providers: [WishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
