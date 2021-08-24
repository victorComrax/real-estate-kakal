import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { LinksComponent } from './components/links/links.component';
import { IconComponent } from './components/icon/icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormContainerComponent } from './components/form/form-container/form-container.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyControlComponent } from './components/property-control/property-control.component';
import { WorkingStepsComponent } from './components/working-steps/working-steps.component';
import { SleepingOptionsByDayComponent } from './components/sleeping-options-by-day/not-working-tabs.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    UserInfoComponent,
    WizardComponent,
    LinksComponent,
    IconComponent,
    FormContainerComponent,
    FormInputComponent,
    PropertyControlComponent,
    WorkingStepsComponent,
    SleepingOptionsByDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
