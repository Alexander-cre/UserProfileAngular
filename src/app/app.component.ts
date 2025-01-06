import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myForm: FormGroup;
  storedData: any;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      username: [''],
      password: [''] ,
      email: [''] ,
      presentaddress: [''] ,
      dateofbirth: [''] ,
      permanentaddress: [''] ,
      city: [''] ,
      country : [''],
      postalCode : [''],
    });
  }

  ngOnInit(): void {
    this.loadStoredData();
  }

  loadStoredData() {
    const data = localStorage.getItem('formData');
    if (data) {
      this.storedData = JSON.parse(data);
      this.myForm.patchValue(this.storedData);
    }
  }

  onSubmit() {
    const formData = this.myForm.value;
    localStorage.setItem('formData', JSON.stringify(formData));
    this.loadStoredData(); // Refresh the displayed data
  }

  onEdit() {
    this.storedData = this.myForm.value; // Update stored data with current form values
  }

}
