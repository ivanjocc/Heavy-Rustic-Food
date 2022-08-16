import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PapaComponent } from './papa/papa.component';
import { PerritosComponent } from './perritos/perritos.component';
import { WingsComponent } from './wings/wings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hamburguesas', component: HamburgerComponent },
  { path: 'alitas', component: WingsComponent },
  { path: 'perritos', component: PerritosComponent },
  { path: 'papa', component: PapaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
