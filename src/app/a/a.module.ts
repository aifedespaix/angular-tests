import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ARoutingModule} from './a-routing.module';
import {AComponent} from './a.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AComponent],
  imports: [
    CommonModule,
    ARoutingModule,
    MatButtonModule,
  ],
})
export class AModule {
}
