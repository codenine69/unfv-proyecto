import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Asegúrate de importar FormControl también
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formReg!:FormGroup;

  constructor(private userService: UserService){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.formReg.value);
    this.userService.register(this.formReg.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }

}
