import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,
                            Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]),
      pwGroup: new FormGroup({
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        passwordRemind: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.checkPassword),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl(Validators.required),
      phone: new FormControl('', [Validators.required,
                            Validators.pattern('^(84)-[0-9]{9,10}$')])
    });
  }

  ngOnInit(): void {

  }

  getInfo(): void {
    console.log(this.registerForm.value);
  }


  checkPassword(passwordCheck: AbstractControl): any {
    const pass = passwordCheck.value;
    return pass.password == pass.passwordRemind ? null : {notDup: true};

  }
}
