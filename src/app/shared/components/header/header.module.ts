import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { HeaderComponent } from './header.component';
// Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
