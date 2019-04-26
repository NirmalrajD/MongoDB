import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './modules/gst-add/gst-add.component';
import { GstEditComponent } from './modules/gst-edit/gst-edit.component';
import { GstGetComponent } from './modules/gst-get/gst-get.component';

const routes: Routes = [
  {    
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
