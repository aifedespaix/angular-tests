import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule)},
  {path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)},
  {path: 'c', loadChildren: () => import('./c/c.module').then(m => m.CModule)},
  {path: 'd', loadChildren: () => import('./d/d.module').then(m => m.DModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
