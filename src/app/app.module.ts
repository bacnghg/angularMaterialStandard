import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';
import { FeaturesComponent } from './features/features.component';
import { CreateFeaturesComponent } from './features/create-features/create-features.component';
import { EditFeaturesComponent } from './features/edit-features/edit-features.component';
import { ViewFeaturesComponent } from './features/view-features/view-features.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    CreateFeaturesComponent,
    EditFeaturesComponent,
    ViewFeaturesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
