/** dependencies */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TextMaskModule } from 'angular2-text-mask';

import { BsDatepickerModule , DatepickerModule } from 'ngx-bootstrap/datepicker';

/** wrappers */
import { PanelWrapperComponent } from './wrappers/panel-wrapper.component';
import { ErrorWrapperComponent } from './wrappers/error.component';

/** types */
import { RepeatSectionComponent } from './types/repeat-section.component';
import { FormlyFieldInputMoney } from './types/money.component';
import { FormlyFieldInputPercentage } from './types/percentage.component';

import { FormlyFieldInputDate } from './types/dateTime.component';

/** configuration */
import { config } from './config'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyBootstrapModule,
    TextMaskModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ],
  declarations: [
    PanelWrapperComponent,
    ErrorWrapperComponent,
    RepeatSectionComponent,
    FormlyFieldInputMoney,
    FormlyFieldInputPercentage,
    FormlyFieldInputDate
  ]
})
export class UiFormModule {}