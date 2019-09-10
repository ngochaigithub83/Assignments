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
import { PAGEComponent } from './page/page.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { Menu2Component } from './menu2/menu2.component';
import { Homelab2Component } from './homelab2/homelab2.component';
import { Testlab02Component } from './testlab02/testlab02.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Bai3Component,
    Bai2Component,
    TestComponent,
    Bai1Component,
    Bai5Component,
    MenuComponent,
    PAGEComponent,
    GioHangComponent,
    Menu2Component,
    Homelab2Component,
    Testlab02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    RatingModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: "", component: Bai1Component },
      { path: 'page1', component: MenuComponent },
      { path: 'page1/bai1', component: Bai1Component },
      // 
      { path: 'page2', component: Homelab2Component },
      // { path: 'page2/homelab2', component: Homelab2Component },
      // { path: 'student', component: Homelab2Component },
      { path: 'student/:id', component: Testlab02Component },
      //  
      { path: 'page1/bai2', component: Bai2Component },
      { path: 'page1/bai3', component: Bai3Component },
      { path: 'page1/bai4', component: ProductsComponent },
      { path: 'page1/bai5', component: Bai5Component },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:productId', component: TestComponent },
      { path: 'cart', component: GioHangComponent },
      // { path: '**', redirectTo: '', pathMatch: 'full' }

    ], { enableTracing: true })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
