import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SuppliersNitComponent } from './suppliers-nit/suppliers-nit.component';
import { BillsComponent } from './components/bills/bills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'suppliers-department', component: SuppliersComponent },
  { path: 'suppliers-nit', component: SuppliersNitComponent },
  { path: 'bills', component: BillsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
