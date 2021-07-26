import { SearchmovieService } from './services/searchmovie.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent} from './films.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListDirective } from './directives/list.directive';


const routes: Routes = [
  {
    path:'films',component:FilmsComponent
  }
]

@NgModule({
  declarations: [FilmsComponent, SearchformComponent, ListDirective],
  providers : [SearchmovieService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
