import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { Bai3Component } from './bai3/bai3.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'ng-starrating';
import { Bai2Component } from './bai2/bai2.component';
import { TestComponent } from './test/test.component';
import { Bai1Component } from './bai1/bai1.component';
import { RouterModule } from '@angular/router';
import { Bai5Component } from './bai5/bai5.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Bai3Component,
    Bai2Component,
    TestComponent,
    Bai1Component,
    Bai5Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    RatingModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: "", component: Bai1Component },
      { path: 'bai/1', component: Bai1Component },
      { path: 'bai/2', component: Bai2Component },
      { path: 'bai/3', component: Bai3Component },
      { path: 'bai/4', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:productId', component: TestComponent },
      { path: 'bai/5', component: Bai5Component },

    ], { enableTracing: true })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
