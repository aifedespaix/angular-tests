import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DComponent } from './d.component';

const routes: Routes = [{ path: '', component: DComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRoutingModule { }
