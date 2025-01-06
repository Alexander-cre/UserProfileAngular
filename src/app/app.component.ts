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
      Name: [''],
      Username: [''],
      Password: [''] ,
      Email: [''] ,
      PresentAddress: [''] ,
      DateoFBirth: [''] ,
      PermanentAddress: [''] ,
      City: [''] ,
      Country : [''],
      PostalCode : [''],
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
