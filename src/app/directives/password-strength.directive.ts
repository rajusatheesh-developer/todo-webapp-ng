import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";

@Directive(
    {
        selector :"[passwordStrength]"
    }
)
export class PasswordStrengthDirective implements Validator
{
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return createPasswordStrengthValidator()(control);
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }

}