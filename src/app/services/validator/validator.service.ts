import { Injectable } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Injectable({
   providedIn: 'root',
})

export class ValidatorService {
   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
   firstNameFormControl = new FormControl('', [Validators.required]);
   lastNameFormControl = new FormControl('', [Validators.required]);
   uidFormControl = new FormControl('', [Validators.required]);
   passwordFormControl = new FormControl('', [Validators.required]);
   confirmPasswordFormControl = new FormControl('', [Validators.required]);
   radioFormControl = new FormControl('', [Validators.required]);

   constructor(){
    
   }
}