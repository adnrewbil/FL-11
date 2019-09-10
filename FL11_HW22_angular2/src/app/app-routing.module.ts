import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { NewsExtendedComponent } from './components/news-extended/news-extended.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'create', component: CreateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'news/:id', component: NewsExtendedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
