import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CouchsComponent } from './pages/couchs/couchs.component';
import { HeadboardsComponent } from './pages/headboards/headboards.component';
import { StoragesComponent } from './pages/storages/storages.component';
import { BedsComponent } from './pages/beds/beds.component';
import { CouchsViewComponent } from './pages/couchs-view/couchs-view.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'couchs', component: CouchsComponent },
  { path: 'headboards', component: HeadboardsComponent },
  { path: 'storages', component: StoragesComponent },
  { path: 'beds', component: BedsComponent },
  { path: 'viewcouch', component: CouchsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
