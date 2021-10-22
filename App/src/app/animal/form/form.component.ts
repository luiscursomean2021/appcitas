import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/Core/Interfaces/Animal';
import { User } from 'src/app/Core/Interfaces/User';
import { AnimalService } from 'src/app/Core/Services/Animal.service';
import { UsersService } from 'src/app/Core/Services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup!: FormGroup;
  animal!: Animal;
  userList!: User[];

  constructor(private fb: FormBuilder, private service: AnimalService, private route: ActivatedRoute, 
    private userService: UsersService, private router: Router) {
    this.newAnimal();
    this.formBuild();
    this.getUserList();
  }

  newAnimal() {
    this.animal = {
      nombre: "",
      raza: "",
      edad: 0,
      tamanio: "",
      vacunas: false,
      imagen: "",
      id_usuario: ""
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

  getUserList(){
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    });  
  }


  @ViewChild('UploadFileInput')
  uploadFileInput!: ElementRef;
  myfilename = 'Select File';

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: any) => {
        //console.log(file);
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

  crear(){
    this.animal = this.formGroup.value;
    let req;
    console.log('animal');
    console.log(this.animal._id);
    if(this.animal._id){
      console.log("vamos a editar");
      req = this.service.update(this.animal);
    }
    else{
      req = this.service.create(this.animal);
    }
    req.subscribe(data => {
      if(typeof data._id !== 'undefined'){
        console.log('despues del subscribe');
        console.log(data);
        this.router.navigate(['animal']);
      }
      else alert ('Error al crear o editar');
    });
  }

}
