import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from './ng-zorro.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroModule
  ]
})
export class SharedModule { }
