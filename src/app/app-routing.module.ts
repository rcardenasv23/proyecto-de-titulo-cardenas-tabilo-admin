import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminComponent} from "./pages/admin/admin.component";
import {CategoryComponent} from "./pages/admin/category/category.component";
import {UnitComponent} from "./pages/admin/unit/unit.component";
import {ProductStateComponent} from "./pages/admin/product-state/product-state.component";
import {PublicationComponent} from "./pages/admin/publication/publication.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent, canActivate:[AuthGuard]},
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
      {path:'', component:CategoryComponent, outlet:"settings"},
      {path:'unit', component:UnitComponent, outlet:"settings"},
      {path:'product-state', component:ProductStateComponent, outlet:"settings"},
      {path:'publications', component:PublicationComponent, outlet:"settings"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
