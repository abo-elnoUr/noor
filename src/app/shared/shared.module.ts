import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbPagination, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbPagination,
    IconsModule,
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgbPagination,
    IconsModule,
    NgbDropdownModule,
    NgbTooltipModule
  ]
})
export class SharedModule { }
