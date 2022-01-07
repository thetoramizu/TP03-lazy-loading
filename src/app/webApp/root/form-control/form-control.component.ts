import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  // creation des formControl
  public prenom = new FormControl('',  Validators.required )
  public message = new FormControl('default', Validators.required)

  constructor(

  ) {
    this.prenom.valueChanges.subscribe(change => {
      const val = this.prenom.value;
      if(val !== null && val.length() >=5 ) {
        this.prenom.reset();
      }
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    // this.form =
  }

}
