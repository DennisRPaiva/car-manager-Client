import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChangeCarComponent } from './home-page/change-car/change-car.component';
import { NewCarComponent } from './home-page/new-car/new-car.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "new",
    component: NewCarComponent,
  },
  {
    path: "update",
    component: ChangeCarComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
