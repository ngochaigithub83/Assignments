import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssignmentComponent } from './assignment/assignment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'ng-starrating';
import { RouterModule } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MyserviceService } from './myservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FromComponent } from './from/from.component';
// import { Bai5Component } from './bai5/bai5.component';
import { MenuComponent } from './menu/menu.component';
import { PAGEComponent } from './page/page.component';
import { From1Component } from './from1/from1.component';
import { From2Component } from './from2/from2.component';
import { From3Component } from './from3/from3.component';
import { From4Component } from './from4/from4.component';
// import { GioHangComponent } from './gio-hang/gio-hang.component';
// import { Menu2Component } from './menu2/menu2.component';
// import { Homelab2Component } from './homelab2/homelab2.component';
// import { Testlab02Component } from './testlab02/testlab02.component';
// import { Menu3Component } from './menu3/menu3.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { DetailshopComponent } from './detailshop/detailshop.component';
// import { ChitietshopComponent } from './chitietshop/chitietshop.component';
// import { Bai2Component } from './bai2/bai2.component';
// import { TestComponent } from './test/test.component';
// import { Bai1Component } from './bai1/bai1.component';
// import { ProductsComponent } from './products/products.component';
import { Bai3Component } from './bai3/bai3.component';
import { AssignmenthoidapComponent } from './assignmenthoidap/assignmenthoidap.component';
import { AssignmentloginComponent } from './assignmentlogin/assignmentlogin.component';
import { AssignmentdangkyComponent } from './assignmentdangky/assignmentdangky.component';
import { AssignmentdoimkComponent } from './assignmentdoimk/assignmentdoimk.component';
import { AssignmentdanhmucmhComponent } from './assignmentdanhmucmh/assignmentdanhmucmh.component';
import { AssignmentgioithieuComponent } from './assignmentgioithieu/assignmentgioithieu.component';
import { AssignmentlienheComponent } from './assignmentlienhe/assignmentlienhe.component';
import { AssignmentquenmkComponent } from './assignmentquenmk/assignmentquenmk.component';
import { AssignmentthitnComponent } from './assignmentthitn/assignmentthitn.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    NewCmpComponent,
    FromComponent,
    // ProductsComponent,
    Bai3Component,
    // Bai2Component,
    // TestComponent,
    // Bai1Component,
    // Bai5Component,
    MenuComponent,
    PAGEComponent,
    From1Component,
    From2Component,
    From3Component,
    From4Component,
    AssignmenthoidapComponent,
    AssignmentloginComponent,
    AssignmentdangkyComponent,
    AssignmentdoimkComponent,
    AssignmentdanhmucmhComponent,
    AssignmentgioithieuComponent,
    AssignmentlienheComponent,
    AssignmentquenmkComponent,
    AssignmentthitnComponent,
    // GioHangComponent,
    // Menu2Component,
    // xzcxzcxzv
    // Testlab02Component,
    // Menu3Component,
    // ShoppingComponent,
    // DetailshopComponent,
    // ChitietshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    RatingModule,
    OrderModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: "", component: Bai1Component },
      { path: 'page1', component: MenuComponent },
      // { path: 'page1/bai1', component: Bai1Component },
      { path: 'page1/from', component: FromComponent },
      { path: 'page1/from1', component: From1Component },
      { path: 'page1/from2', component: From2Component },
      { path: 'page1/from3', component: Bai3Component },
      { path: 'page1/from4', component: From4Component },
      // { path: 'page2', component: Homelab2Component },
      { path: 'page2', component: AssignmentComponent },
      { path: 'trangchu', component: AssignmentComponent },
      { path: 'gopy', component: AssignmenthoidapComponent },
      { path: 'hoidap', component: AssignmenthoidapComponent },
      { path: 'login', component: AssignmentloginComponent },
      { path: 'dangky', component: AssignmentdangkyComponent },
      { path: 'doimk', component: AssignmentdoimkComponent },
      { path: 'danhmucmh', component: AssignmentdanhmucmhComponent },
      { path: 'gioithieu', component: AssignmentgioithieuComponent },
      { path: 'lienhe', component: AssignmentlienheComponent },
      { path: 'quenmk', component: AssignmentquenmkComponent },
      { path: 'thitn', component: AssignmentthitnComponent },
      // { path: 'page3', component: ShoppingComponent },
      // { path: 'page2/homelab2', component: Homelab2Component },
      // { path: 'student', component: Homelab2Component },
      // { path: 'student/:id', component: Testlab02Component },
      // { path: 'dienthoai', component: DetailshopComponent },
      // { path: 'chitiet', component: ChitietshopComponent },
      // { path: 'detail', component: DetailshopComponent },
      // { path: 'page1/bai2', component: Bai2Component },
      // { path: 'page1/bai3', component: Bai3Component },
      // { path: 'page1/bai4', component: ProductsComponent },
      // { path: 'page1/bai5', component: Bai5Component },
      // { path: 'products', component: ProductsComponent },
      // { path: 'products/:productId', component: TestComponent },
      // { path: 'cart', component: GioHangComponent },
      // { path: '**', redirectTo: '', pathMatch: 'full' }

      { path: 'new-cmp', component: NewCmpComponent }



    ], { enableTracing: true })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
