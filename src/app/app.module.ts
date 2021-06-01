import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InformationComponent } from './pages/information/information.component';
import { NewsComponent } from './pages/news/news.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorksComponent } from './pages/works/works.component';
import { InteriorDoorsComponent } from './pages/services/doorsTypes/interior-doors/interior-doors.component';
import { EntraceDoorsComponent } from './pages/services/doorsTypes/entrace-doors/entrace-doors.component';
import { FurnitureComponent } from './pages/services/doorsTypes/furniture/furniture.component';
import { WoodProductsComponent } from './pages/services/wood-products/wood-products.component';
import { ProductPageComponent } from './pages/services/doorsTypes/product-page/product-page.component';

import { HttpClientModule } from '@angular/common/http';
import { DirectiveProductPageComponent } from './pages/services/doorsTypes/directive-product-page/directive-product-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminProductsPipePipe } from './shared/pipes/admin-products-pipe.pipe';
import { WoodProductPageComponent } from './pages/services/wood-products/wood-product-page/wood-product-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AdminWoodProductsComponent } from './pages/admin/admin-wood-products/admin-wood-products.component';
import { WoodProductsPipePipe } from './shared/pipes/wood-products-pipe.pipe';

// import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { loader } from './shared/configuration/loader.config';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminOrdersPipePipe } from './shared/pipes/admin-orders-pipe.pipe';
import { AdminSubComponent } from './pages/admin/admin-sub/admin-sub.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { AgmCoreModule, AgmMap } from '@agm/core';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BasketComponent,
    ContactsComponent,
    InformationComponent,
    NewsComponent,
    ServicesComponent,
    WorksComponent,
    InteriorDoorsComponent,
    EntraceDoorsComponent,
    FurnitureComponent,
    WoodProductsComponent,
    ProductPageComponent,
    DirectiveProductPageComponent,
    AdminComponent,
    AdminProductsPipePipe,
    WoodProductPageComponent,
    AdminWoodProductsComponent,
    WoodProductsPipePipe,
    AdminOrdersComponent,
    AdminUsersComponent,
    AdminOrdersPipePipe,
    AdminSubComponent,
    
    // MatButtonModule
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxUiLoaderModule.forRoot(loader),
    NgxUiLoaderRouterModule,
    BrowserAnimationsModule,
    // AgmMap,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    // })
  
    // MatButtonModule,
    // MatDatepickerModule,
    // MatFormFieldModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
