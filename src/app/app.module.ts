import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssignmentComponent } from './cpn-assignment/assignment/assignment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'ng-starrating';
import { RouterModule } from '@angular/router';
import { MyserviceService } from './cpn-assignment/myservice.service';
import { HttpClientModule } from '@angular/common/http'
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmenthoidapComponent } from './cpn-assignment/assignmenthoidap/assignmenthoidap.component';
import { AssignmentloginComponent } from './cpn-assignment/assignmentlogin/assignmentlogin.component';
import { AssignmentdangkyComponent } from './cpn-assignment/assignmentdangky/assignmentdangky.component';
import { AssignmentdoimkComponent } from './cpn-assignment/assignmentdoimk/assignmentdoimk.component';
import { AssignmentdanhmucmhComponent } from './cpn-assignment/assignmentdanhmucmh/assignmentdanhmucmh.component';
import { AssignmentgioithieuComponent } from './cpn-assignment/assignmentgioithieu/assignmentgioithieu.component';
import { AssignmentlienheComponent } from './cpn-assignment/assignmentlienhe/assignmentlienhe.component';
import { AssignmentquenmkComponent } from './cpn-assignment/assignmentquenmk/assignmentquenmk.component';
import { AssignmentthitnComponent } from './cpn-assignment/assignmentthitn/assignmentthitn.component';
// import { ExamComponent } from './cpn-assignment/exam/exam.component';
// import { MdCheckboxModule } from '@angular/material';
// import { FormsModule } from '@angular/forms';
// import { NewCmpComponent } from './new-cmp/new-cmp.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FromComponent } from './from/from.component';
// import { Bai5Component } from './bai5/bai5.component';
// import { MenuComponent } from './menu/menu.component';
// import { PAGEComponent } from './page/page.component';
// import { From1Component } from './from1/from1.component';
// import { From2Component } from './from2/from2.component';
// import { From3Component } from './from3/from3.component';
// import { From4Component } from './from4/from4.component';
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
// import { Bai3Component } from './bai3/bai3.component';
// import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './core/auth.guard';
// import { AuthService } from './core/auth.service';
// import { UserService } from './core/user.service';
// import { UserComponent } from './user/user.component';
// import { UserResolver } from './user/user.resolver'
// import { GuitarhomeComponent } from './guitar/guitarhome/guitarhome.component';
// import { DetailsguitarComponent } from './guitar/detailsguitar/detailsguitar.component';
// import { AddguitarComponent } from './guitar/addguitar/addguitar.component';
// import { FormLab06Component } from './form-lab06/form-lab06.component';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    AssignmenthoidapComponent,
    AssignmentloginComponent,
    AssignmentdangkyComponent,
    AssignmentdoimkComponent,
    AssignmentdanhmucmhComponent,
    AssignmentgioithieuComponent,
    AssignmentlienheComponent,
    AssignmentquenmkComponent,
    AssignmentthitnComponent,
    // ExamComponent,
    // NewCmpComponent,
    // FromComponent,
    // AuthGuard,
    // AuthService,
    // ProductsComponent,
    // Bai3Component,
    // Bai2Component,
    // TestComponent,
    // Bai1Component,
    // Bai5Component,
    // MenuComponent,
    // PAGEComponent,
    // From1Component,
    // From2Component,
    // From3Component,
    // From4Component,
    // GuitarhomeComponent,
    // DetailsguitarComponent,
    // AddguitarComponent,
    // FormLab06Component,
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
    // AuthGuard,
    // UserService,
    // UserComponent,
    // UserResolver,
    // MdCheckboxModule,
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    RatingModule,
    OrderModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AssignmentComponent },
      { path: "test/:id", component: AssignmentthitnComponent },
      { path: "exam", component: AssignmentdanhmucmhComponent },
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
      // { path: '', component: GuitarhomeComponent },
      // { path: "", component: Bai1Component },
      // { path: "test/:id", component: AssignmentthitnComponent },
      // { path: 'page1', component: MenuComponent },
      // { path: 'page1/bai1', component: Bai1Component },
      // { path: 'page1/from', component: FromComponent },
      // { path: 'page1/from1', component: From1Component },
      // { path: 'page1/from2', component: From2Component },
      // { path: 'page1/from3', component: From3Component },
      // { path: 'page1/from4', component: From4Component },
      // { path: 'page2', component: Homelab2Component },
      // { path: '', component: LoginComponent },
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
      // { path: 'new-cmp', component: NewCmpComponent },
      // { path: 'guitarhome', component: GuitarhomeComponent },
      // { path: 'guitarhome/:id', component: DetailsguitarComponent }
    ], { enableTracing: true })
  ],

  // providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
