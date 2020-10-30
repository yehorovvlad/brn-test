import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookInfoComponent } from './containers/book-info/book-info.component';
import { BookReadingComponent } from './containers/book-reading/book-reading.component';
import { HomeComponent } from './containers/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'book-info', component: BookInfoComponent },
  { path: 'book-reading', component: BookReadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
