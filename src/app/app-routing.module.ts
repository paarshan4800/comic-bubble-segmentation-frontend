import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OutputComponent } from './output/output.component';
import { SampleImagesComponent } from './sample-images/sample-images.component';
import { ServerDirectoryComponent } from './server-directory/server-directory.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: "homepage", component: HomepageComponent },
  { path: "sample-images", component: SampleImagesComponent },
  { path: "output", component: OutputComponent },
  { path: "directory", component: ServerDirectoryComponent },
  { path: "loader", component: LoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
