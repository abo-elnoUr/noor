import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Pattern {
    public static Email: RegExp = /^[a-zA-Z][a-zA-Z0-9._%+-]+@([a-zA-Z0-9]+)([.][^.]*).{0,2}([a-zA-Z0-9]+)$/;
    public static Password: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/;
    public static EnglishLettersAndNumbersWithoutSpacialChar:RegExp=/^((\s*)[a-zA-Z]){1,}\d*((\s*)[a-zA-Z0-9](\s*))*\d*$/;
    public static ArabicLettersAndNumbersWithoutSpacialChar:RegExp=/^((\s*)[ء-ي]){1,}\d*((\s*)[ء-ي\d](\s*))*\d*$/;
    public static EnglishLetters: RegExp = /^([a-zA-Z]+\s)*[a-zA-Z]+/;
    public static ArabicLetters: RegExp = /^([ء-ي]+\s)*[ء-ي]+/;
    public static capital: RegExp = /(?=.*[A-Z])/;
    public static small: RegExp = /(?=.*[a-z])/;
    public static number: RegExp = /(?=.*[0-9])/;
    public static specialCharacter: RegExp = /(?=.*[!@#\$%\^&\*])/;

    public static RegexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            if (!control.value) {
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        }
    }

    public static LanguageValidation(lang: string, error: ValidationErrors): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} | null => {
        if(!control.value) {
          return null;
        }
        let valid = true;
        if(lang == 'en') {
          // valid = this.EnglishLettersAndNumbersWithoutSpacialChar.test(control.value);
          valid = this.EnglishLetters.test(control.value);
        } else if(lang == 'ar') {
          // valid = this.ArabicLettersAndNumbersWithoutSpacialChar.test(control.value);
          valid = this.ArabicLetters.test(control.value);
        }
        return valid ? null : error;
      }
    }
}
