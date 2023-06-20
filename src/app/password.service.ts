import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {

    constructor() {
    }

    getPasswordStrength(password: string) {
        if (password.length < 8) {

            return "short";
            ;
        }
        let hasDigits = this.hasDigits(password);
        let hasLetters = this.hasLetters(password);
        let hasSymbolls = this.hasSymbolls(password);
        if (hasDigits && hasLetters && hasSymbolls) {
            return 'hard'
        }
        else if (hasLetters && hasSymbolls
            || hasLetters && hasDigits
            || hasDigits && hasSymbolls) {
            return "medium"
        }
        else {
            return "easy"
        }

    }

    private hasDigits(password: string) {
        let regex = /[0-9]+/;
        return regex.test(password);
    }

    private hasLetters(password: string) {
        let regex = /[a-zA-Z]+/
        return regex.test(password)
    }
    private hasSymbolls(password: string) {
        let rejex = /[-!$%^&*()@_+|~=`{}\[\]:";'<>?,.\\\/]+/;
        return rejex.test(password)
    }


}
