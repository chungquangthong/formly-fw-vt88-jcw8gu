import { Component , OnInit} from '@angular/core';
import { CountersService } from './counters.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyService } from './ui-form/formly.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FormlyService ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  public model = {};
  public form: FormGroup;
  public fields: FormlyFieldConfig[] = [
    ...this.formlyService.getDefaultForm()
  ];

  constructor(
    private formBuilder: FormBuilder,
    private formlyService: FormlyService) {


  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      dist: [''],
      address: [''],
    });
     this.form.valueChanges.subscribe((model) => {
      this.model = model;
      console.log(this.form.get('country'));
    });
  }
}
