import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { CreateFeaturesComponent } from './features/create-features/create-features.component';
import { EditFeaturesComponent } from './features/edit-features/edit-features.component';
import { ViewFeaturesComponent } from './features/view-features/view-features.component';



const routes: Routes = [
  { path: '', component: FeaturesComponent},
  { path: 'create-features', component: CreateFeaturesComponent},
  { path: 'view-features', component: ViewFeaturesComponent },
  { path: 'edit-features', component: EditFeaturesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
