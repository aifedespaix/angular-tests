import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule,
    BRoutingModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class BModule { }
