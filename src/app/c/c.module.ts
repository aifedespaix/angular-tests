import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { CComponent } from './c.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    CRoutingModule,
    MatTableModule,
  ],
})
export class CModule { }
