import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  // @ts-ignore
  monForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    // this.monForm = new FormGroup({
    // prenom: new FormControl('', Validators.required),
    // nom: new FormControl(['', Validators.required]),

    this.monForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email:['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'), Validators.required]],
      adresse: this.formBuilder.group({
        ville: new FormControl(''),
        cp: new FormControl(''),
        rue: new FormControl(''),

      })
    })

  }

  onSubmit() {

    console.log(this.monForm.value);
    const jsonDatas = JSON.stringify(this.monForm.value);
    // TODO  service.post
  }

}
