import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input-date',
  template: `
   <div class="form-group">
     <input type="text"
           placeholder="Datepicker"
           class="form-control"
           bsDatepicker
           [(bsValue)]="dateValue">
   </div>
 `,
})
export class FormlyFieldInputDate extends FieldType {
  dateValue = new Date();
}
