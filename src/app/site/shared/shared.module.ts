import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu/navmenu.component';



@NgModule({
  declarations: [
    NavmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [NavmenuComponent]
})
export class SharedModule { }
