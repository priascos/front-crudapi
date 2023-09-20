import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './researchers/index/index.component';
import { CreateComponent } from './researchers/create/create.component';
import { DetailComponent } from './researchers/detail/detail.component';

const routes: Routes = [
  { path: 'researchers', redirectTo: 'researchers/index', pathMatch: 'full'},
  { path: 'researchers/index', component: IndexComponent },
  { path: 'researchers/create', component: CreateComponent },
  { path: 'researchers/detail/:orcid', component: DetailComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
