import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyHeaderComponent } from "../my-header/my-header.component";

import { ReactiveFormsModule } from "@angular/forms";
import { MyFormComponent } from "../my-form/my-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, MyHeaderComponent, MyFormComponent]
})
export class HomePageModule {}
