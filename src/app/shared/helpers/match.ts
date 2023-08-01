import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MatchControls {

  static validControls(controlName: string, matchControlName: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName) as FormControl;
      const matchControl = formGroup.get(matchControlName) as FormControl;
      if (matchControl.errors && !matchControl.errors['mustMatch']) {
        return null;
      }
      if (control.value !== matchControl.value) {
        matchControl.setErrors({ mustMatch: true });
        return { mustMath: true }
      } else {
        matchControl.setErrors(null);
        return null;
      }
    }
  }

}
