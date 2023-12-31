import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

const routes: Routes = [

  { path: '', loadChildren : () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
