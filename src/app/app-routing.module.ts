import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'MobileStore'},
  { path: 'profile', component: ProfileComponent, title: 'MobileStore | Profile' },
  {path: 'products',
      loadChildren:()=> import('./product/product.module')
                              .then(m=> m.ProductModule) },
  {path:'**',component:PageNotFoundComponent,title:'Page Not Found'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
