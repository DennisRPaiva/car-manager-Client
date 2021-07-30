import { NewCarComponent } from './home-page/new-car/new-car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "new",
    component: NewCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
