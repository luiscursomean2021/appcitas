import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Animal } from 'src/app/Core/Interfaces/Animal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  file: File | null = null;
  formGroup!:FormGroup;
  animal!:Animal;

  constructor(private fb:FormBuilder) {
    this.formBuild();
   }

  formBuild(){
    this.formGroup = this.fb.group({
      nombre:"",
      raza:"",
      edad:"",
      tamanio:"",
      vacunas:false,
      imagen:"",
      id_usuario:""
    });
  }

  ngOnInit(): void {
  }



  crear(){
    this.animal = this.formGroup.value;
    console.log(this.animal)
  }

}
