import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRoutingModule } from './d-routing.module';
import { DComponent } from './d.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [DComponent],
  imports: [
    CommonModule,
    DRoutingModule,
    MatGridListModule,
  ],
})
export class DModule { }
