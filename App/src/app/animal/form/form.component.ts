import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Core/Interfaces/Animal';
import { AnimalService } from 'src/app/Core/Services/Animal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup!: FormGroup;
  animal!: Animal;

  constructor(private fb: FormBuilder, private service: AnimalService, private route: ActivatedRoute) {
    this.newAnimal();
    this.formBuild();
  }

  newAnimal() {
    this.animal = {
      nombre: "",
      raza: "",
      edad: 0,
      tamanio: "",
      vacunas: false,
      //imagen: "",
      //id_usuario: ""
    }
  }

  formBuild() {
    this.formGroup = this.fb.group({
      nombre: "",
      raza: "",
      edad: 0,
      tamanio: "",
      vacunas: false,
      imagen: "",
      id_usuario: ""
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        if (typeof params.id !== undefined) {
          this.service.getAnimal(params.id).subscribe(
            data => {
              if (data._id == params.id) {
                this.formBuild();
                this.animal = data;
              }
            }
          );
        }
      }
    );
  }

  @ViewChild('UploadFileInput')
  uploadFileInput!: ElementRef;
  myfilename = 'Select File';

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: any) => {
        console.log(file);
        this.myfilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }

  crear() {
    this.animal = {
      nombre: this.formGroup.value.nombre,
      raza: this.formGroup.value.raza,
      edad: this.formGroup.value.edad,
      tamanio: this.formGroup.value.tamanio,
      vacunas: this.formGroup.value.vacunas,
      //imagen: this.formGroup.value.imagen,
      //id_usuario: this.formGroup.value.id_usuario
    };
    // console.log(this.animal)
    this.service.create(this.animal).subscribe();
  }

}
