import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-test';
  password: string = "";
  strenght: string = '';


  onPasswordChange() {
    let hasDigits = this.hasDigits();
    let hasLetters = this.hasLetters();
    let hasSymbolls = this.hasSymbolls();
    console.log(hasDigits, hasLetters, hasSymbolls)
    if (hasDigits && hasLetters && hasSymbolls) {
      this.strenght = 'hard'
    }
    else if (hasLetters && hasSymbolls
      || hasLetters && hasDigits
      || hasDigits && hasSymbolls) {
      this.strenght = "medium"
    }
    else {
      this.strenght = "easy"
    }
    console.log(this.strenght)
  }

  private hasDigits() {
    let regex = /[0-9]+/;
    return regex.test(this.password);
  }

  private hasLetters() {
    let regex = /[a-zA-Z]+/
    return regex.test(this.password)
  }
  private hasSymbolls() {
    let rejex = /[-!$%^&*()@_+|~=`{}\[\]:";'<>?,.\\\/]+/;
    return rejex.test(this.password)
  }

}


let component: AppComponent = new AppComponent();
component.onPasswordChange()