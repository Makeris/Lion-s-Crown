import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { NewsComponent } from './pages/news/news.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorksComponent } from './pages/works/works.component';

import { InteriorDoorsComponent } from './pages/services/doorsTypes/interior-doors/interior-doors.component';
import { EntraceDoorsComponent } from './pages/services/doorsTypes/entrace-doors/entrace-doors.component';
import { FurnitureComponent } from './pages/services/doorsTypes/furniture/furniture.component';
import { WoodProductsComponent } from './pages/services/wood-products/wood-products.component';
import { ProductPageComponent } from './pages/services/doorsTypes/product-page/product-page.component';
import { DirectiveProductPageComponent } from './pages/services/doorsTypes/directive-product-page/directive-product-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { WoodProductPageComponent } from './pages/services/wood-products/wood-product-page/wood-product-page.component';
import { AdminWoodProductsComponent } from './pages/admin/admin-wood-products/admin-wood-products.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminSubComponent } from './pages/admin/admin-sub/admin-sub.component';




const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: 'home'},
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'works', component: WorksComponent},
  {path: 'info', component: InformationComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'admin/adminWoodProducts', component: AdminWoodProductsComponent},
  {path: 'admin/adminOrders', component: AdminOrdersComponent},
  {path: 'admin/usersList', component: AdminUsersComponent},
  {path: 'admin/subCategory', component: AdminSubComponent},
  // {path : 'services' , children : [
  //   // сюда  пишеш інтерер , ентрейс , фурнитруа , воррд продукт   так більше читабільно
  // ] } 
  {path: 'services/interior', component: InteriorDoorsComponent},
  {path: 'services/entrace', component: EntraceDoorsComponent},
  {path: 'services/furniture', component: FurnitureComponent},
  {path: 'services/woodProducts', component: WoodProductsComponent},
  
  {path: 'services/:className/:type/productPage', component: ProductPageComponent},
  {path: 'services/:className/:type/productPage/:id', component: DirectiveProductPageComponent},
  // {path: 'services/entraceDoors/productPage/DirectiveProductPage', component: DirectiveProductPageComponent},
  {path: 'services/woodProducts/:id', component: WoodProductPageComponent},
  // {path: "**", pathMatch: "full", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
