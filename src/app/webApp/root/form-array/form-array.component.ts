import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  // @ts-ignore
  public cursus: FormGroup;
  // @ts-ignore
  // private formations: FormArray;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.cursus = this.formBuilder.group({
      nomCursus: '', formations: this.formBuilder.array([])
    })
  }

  /**
   * Getter formation pour retourner le formArray formations depuis le formGroup cursus
   */
  get formations(): FormArray {
    return this.cursus.get('formations') as FormArray
  }

  /**
   * Permet d'ajouter un nouveau FormGroup au champ formation, contenant plusieurs champs
   */
  addFormation() {
    this.formations.push(this.newFormation())
  }

  public newFormation(): FormGroup {
    return this.formBuilder.group({
      formation: '',
      niveau: '',
    })
}

  onSubmit() {

    console.log(this.cursus.value)
  }

  public removeFormation(id: number){
    this.formations.removeAt(id);
  }

}
