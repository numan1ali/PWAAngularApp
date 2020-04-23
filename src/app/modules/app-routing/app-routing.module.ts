import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductComponent } from 'src/app/components/product/product.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent, ProductComponent];
