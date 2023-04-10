import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TopnavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TopnavbarComponent
  ]
})
export class SharedModule { }
